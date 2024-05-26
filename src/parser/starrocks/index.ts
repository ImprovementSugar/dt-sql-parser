import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { StarrocksSqlLexer } from '../../lib/starrocks/StarrocksSqlLexer';
import { StarrocksSqlParser, ProgramContext } from '../../lib/starrocks/StarrocksSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { StarrocksSqlSplitListener } from './starrocksSplitListener';
import { SparkEntityCollector } from './starrocksEntityCollector';

export { StarrocksSqlSplitListener, SparkEntityCollector };

export class StarrocksSql extends BasicSQL<StarrocksSqlLexer, ProgramContext, StarrocksSqlParser> {
    protected createLexerFromCharStream(charStreams: CharStream) {
        return new StarrocksSqlLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new StarrocksSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        StarrocksSqlParser.RULE_namespaceName,
        StarrocksSqlParser.RULE_namespaceNameCreate,
        StarrocksSqlParser.RULE_tableName,
        StarrocksSqlParser.RULE_tableNameCreate,
        StarrocksSqlParser.RULE_viewName,
        StarrocksSqlParser.RULE_viewNameCreate,
        StarrocksSqlParser.RULE_functionName,
        StarrocksSqlParser.RULE_functionNameCreate,
        StarrocksSqlParser.RULE_columnName,
        StarrocksSqlParser.RULE_columnNameCreate,
    ]);

    protected get splitListener() {
        return new StarrocksSqlSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new SparkEntityCollector(input, caretTokenIndex);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case StarrocksSqlParser.RULE_namespaceName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case StarrocksSqlParser.RULE_namespaceNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case StarrocksSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case StarrocksSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case StarrocksSqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case StarrocksSqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case StarrocksSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case StarrocksSqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case StarrocksSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case StarrocksSqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
                const keyword =
                    displayName.startsWith("'") && displayName.endsWith("'")
                        ? displayName.slice(1, -1)
                        : displayName;
                keywords.push(keyword);
            }
        }

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
