// Generated from dt-sql-parser/src/grammar/starrocks/StarrocksSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';


import { ProgramContext } from "./StarrocksSqlParser.js";
import { SingleStatementContext } from "./StarrocksSqlParser.js";
import { StatementDefaultContext } from "./StarrocksSqlParser.js";
import { DmlStatementContext } from "./StarrocksSqlParser.js";
import { UseNamespaceContext } from "./StarrocksSqlParser.js";
import { SetCatalogContext } from "./StarrocksSqlParser.js";
import { CreateNamespaceContext } from "./StarrocksSqlParser.js";
import { SetNamespacePropertiesContext } from "./StarrocksSqlParser.js";
import { SetNamespaceLocationContext } from "./StarrocksSqlParser.js";
import { DropNamespaceContext } from "./StarrocksSqlParser.js";
import { ShowNamespacesContext } from "./StarrocksSqlParser.js";
import { CreateTableContext } from "./StarrocksSqlParser.js";
import { CreateTableLikeContext } from "./StarrocksSqlParser.js";
import { ReplaceTableContext } from "./StarrocksSqlParser.js";
import { AnalyzeContext } from "./StarrocksSqlParser.js";
import { AnalyzeTablesContext } from "./StarrocksSqlParser.js";
import { AlterTableAddColumnContext } from "./StarrocksSqlParser.js";
import { AlterTableAddColumnsContext } from "./StarrocksSqlParser.js";
import { RenameTableColumnContext } from "./StarrocksSqlParser.js";
import { AlterTableDropColumnContext } from "./StarrocksSqlParser.js";
import { DropTableColumnsContext } from "./StarrocksSqlParser.js";
import { RenameTableContext } from "./StarrocksSqlParser.js";
import { SetTablePropertiesContext } from "./StarrocksSqlParser.js";
import { UnsetTablePropertiesContext } from "./StarrocksSqlParser.js";
import { AlterTableAlterColumnContext } from "./StarrocksSqlParser.js";
import { HiveChangeColumnContext } from "./StarrocksSqlParser.js";
import { HiveReplaceColumnsContext } from "./StarrocksSqlParser.js";
import { SetTableSerDeContext } from "./StarrocksSqlParser.js";
import { SetTableSerDePropertiesContext } from "./StarrocksSqlParser.js";
import { AddTablePartitionContext } from "./StarrocksSqlParser.js";
import { RenameTablePartitionContext } from "./StarrocksSqlParser.js";
import { DropTablePartitionsContext } from "./StarrocksSqlParser.js";
import { SetTableLocationContext } from "./StarrocksSqlParser.js";
import { RecoverPartitionsContext } from "./StarrocksSqlParser.js";
import { AlterMaterializedViewRewriteContext } from "./StarrocksSqlParser.js";
import { AlterMaterializedViewPropertiesContext } from "./StarrocksSqlParser.js";
import { DropTableContext } from "./StarrocksSqlParser.js";
import { DropViewContext } from "./StarrocksSqlParser.js";
import { DropMaterializedViewContext } from "./StarrocksSqlParser.js";
import { CreateViewContext } from "./StarrocksSqlParser.js";
import { CreateTempViewUsingContext } from "./StarrocksSqlParser.js";
import { AlterViewQueryContext } from "./StarrocksSqlParser.js";
import { CreateFunctionContext } from "./StarrocksSqlParser.js";
import { CreateMaterializedViewContext } from "./StarrocksSqlParser.js";
import { DropFunctionContext } from "./StarrocksSqlParser.js";
import { DeclareVariableContext } from "./StarrocksSqlParser.js";
import { DropVariableContext } from "./StarrocksSqlParser.js";
import { ExplainStatementContext } from "./StarrocksSqlParser.js";
import { ShowTablesContext } from "./StarrocksSqlParser.js";
import { ShowTableExtendedContext } from "./StarrocksSqlParser.js";
import { ShowTblPropertiesContext } from "./StarrocksSqlParser.js";
import { ShowColumnsContext } from "./StarrocksSqlParser.js";
import { ShowViewsContext } from "./StarrocksSqlParser.js";
import { ShowPartitionsContext } from "./StarrocksSqlParser.js";
import { ShowFunctionsContext } from "./StarrocksSqlParser.js";
import { ShowCreateTableContext } from "./StarrocksSqlParser.js";
import { ShowCurrentNamespaceContext } from "./StarrocksSqlParser.js";
import { ShowCatalogsContext } from "./StarrocksSqlParser.js";
import { ShowMaterializedViewsContext } from "./StarrocksSqlParser.js";
import { ShowCreateMaterializedViewContext } from "./StarrocksSqlParser.js";
import { DescribeFunctionContext } from "./StarrocksSqlParser.js";
import { DescribeNamespaceContext } from "./StarrocksSqlParser.js";
import { DescribeRelationContext } from "./StarrocksSqlParser.js";
import { DescribeQueryContext } from "./StarrocksSqlParser.js";
import { CommentNamespaceContext } from "./StarrocksSqlParser.js";
import { CommentTableContext } from "./StarrocksSqlParser.js";
import { RefreshTableContext } from "./StarrocksSqlParser.js";
import { RefreshFunctionContext } from "./StarrocksSqlParser.js";
import { RefreshResourceContext } from "./StarrocksSqlParser.js";
import { RefreshMaterializedViewContext } from "./StarrocksSqlParser.js";
import { CacheTableContext } from "./StarrocksSqlParser.js";
import { UnCacheTableContext } from "./StarrocksSqlParser.js";
import { ClearCacheContext } from "./StarrocksSqlParser.js";
import { LoadDataContext } from "./StarrocksSqlParser.js";
import { TruncateTableContext } from "./StarrocksSqlParser.js";
import { RepairTableContext } from "./StarrocksSqlParser.js";
import { ManageResourceContext } from "./StarrocksSqlParser.js";
import { FailNativeCommandContext } from "./StarrocksSqlParser.js";
import { SetTimeZoneIntervalContext } from "./StarrocksSqlParser.js";
import { SetTimeZoneContext } from "./StarrocksSqlParser.js";
import { SetTimeZoneAnyContext } from "./StarrocksSqlParser.js";
import { SetVariableAssignmentContext } from "./StarrocksSqlParser.js";
import { SetVariableMultiAssignmentContext } from "./StarrocksSqlParser.js";
import { SetConfigContext } from "./StarrocksSqlParser.js";
import { SetConfigAndValueContext } from "./StarrocksSqlParser.js";
import { SetConfigAnyKeyContext } from "./StarrocksSqlParser.js";
import { SetAnyContext } from "./StarrocksSqlParser.js";
import { ResetConfigContext } from "./StarrocksSqlParser.js";
import { ResetAnyContext } from "./StarrocksSqlParser.js";
import { CreateIndexContext } from "./StarrocksSqlParser.js";
import { DropIndexContext } from "./StarrocksSqlParser.js";
import { OptimizeTableContext } from "./StarrocksSqlParser.js";
import { UnsupportHiveCommandsContext } from "./StarrocksSqlParser.js";
import { TimezoneContext } from "./StarrocksSqlParser.js";
import { ConfigKeyContext } from "./StarrocksSqlParser.js";
import { ConfigValueContext } from "./StarrocksSqlParser.js";
import { UnsupportedHiveNativeCommandsContext } from "./StarrocksSqlParser.js";
import { CreateTableHeaderContext } from "./StarrocksSqlParser.js";
import { ReplaceTableHeaderContext } from "./StarrocksSqlParser.js";
import { BucketSpecContext } from "./StarrocksSqlParser.js";
import { SkewSpecContext } from "./StarrocksSqlParser.js";
import { LocationSpecContext } from "./StarrocksSqlParser.js";
import { CommentSpecContext } from "./StarrocksSqlParser.js";
import { QueryStatementContext } from "./StarrocksSqlParser.js";
import { InsertIntoContext } from "./StarrocksSqlParser.js";
import { PartitionSpecLocationContext } from "./StarrocksSqlParser.js";
import { PartitionSpecContext } from "./StarrocksSqlParser.js";
import { PartitionValContext } from "./StarrocksSqlParser.js";
import { NamespaceContext } from "./StarrocksSqlParser.js";
import { NamespacesContext } from "./StarrocksSqlParser.js";
import { DescribeFuncNameContext } from "./StarrocksSqlParser.js";
import { DescribeColNameContext } from "./StarrocksSqlParser.js";
import { CtesContext } from "./StarrocksSqlParser.js";
import { NamedQueryContext } from "./StarrocksSqlParser.js";
import { TableProviderContext } from "./StarrocksSqlParser.js";
import { CreateTableClausesContext } from "./StarrocksSqlParser.js";
import { TableLifecycleContext } from "./StarrocksSqlParser.js";
import { PropertyListContext } from "./StarrocksSqlParser.js";
import { PropertyContext } from "./StarrocksSqlParser.js";
import { PropertyKeyContext } from "./StarrocksSqlParser.js";
import { PropertyValueContext } from "./StarrocksSqlParser.js";
import { ExpressionPropertyListContext } from "./StarrocksSqlParser.js";
import { ExpressionPropertyContext } from "./StarrocksSqlParser.js";
import { ConstantListContext } from "./StarrocksSqlParser.js";
import { NestedConstantListContext } from "./StarrocksSqlParser.js";
import { CreateFileFormatContext } from "./StarrocksSqlParser.js";
import { FileFormatContext } from "./StarrocksSqlParser.js";
import { StorageHandlerContext } from "./StarrocksSqlParser.js";
import { ResourceContext } from "./StarrocksSqlParser.js";
import { InsertFromQueryContext } from "./StarrocksSqlParser.js";
import { MultipleInsertContext } from "./StarrocksSqlParser.js";
import { DeleteFromTableContext } from "./StarrocksSqlParser.js";
import { UpdateTableContext } from "./StarrocksSqlParser.js";
import { MergeIntoTableContext } from "./StarrocksSqlParser.js";
import { NamespaceNameContext } from "./StarrocksSqlParser.js";
import { NamespaceNameCreateContext } from "./StarrocksSqlParser.js";
import { TableNameCreateContext } from "./StarrocksSqlParser.js";
import { TableNameContext } from "./StarrocksSqlParser.js";
import { ViewNameCreateContext } from "./StarrocksSqlParser.js";
import { ViewNameContext } from "./StarrocksSqlParser.js";
import { ColumnNameContext } from "./StarrocksSqlParser.js";
import { ColumnNameSeqContext } from "./StarrocksSqlParser.js";
import { ColumnNameCreateContext } from "./StarrocksSqlParser.js";
import { IdentifierReferenceContext } from "./StarrocksSqlParser.js";
import { QueryOrganizationContext } from "./StarrocksSqlParser.js";
import { MultiInsertQueryBodyContext } from "./StarrocksSqlParser.js";
import { QueryTermContext } from "./StarrocksSqlParser.js";
import { QueryPrimaryContext } from "./StarrocksSqlParser.js";
import { SortItemContext } from "./StarrocksSqlParser.js";
import { FromStatementContext } from "./StarrocksSqlParser.js";
import { FromStatementBodyContext } from "./StarrocksSqlParser.js";
import { QuerySpecificationContext } from "./StarrocksSqlParser.js";
import { TransformClauseContext } from "./StarrocksSqlParser.js";
import { SelectClauseContext } from "./StarrocksSqlParser.js";
import { SetClauseContext } from "./StarrocksSqlParser.js";
import { MatchedClauseContext } from "./StarrocksSqlParser.js";
import { NotMatchedClauseContext } from "./StarrocksSqlParser.js";
import { NotMatchedBySourceClauseContext } from "./StarrocksSqlParser.js";
import { MatchedActionContext } from "./StarrocksSqlParser.js";
import { NotMatchedActionContext } from "./StarrocksSqlParser.js";
import { NotMatchedBySourceActionContext } from "./StarrocksSqlParser.js";
import { AssignmentListContext } from "./StarrocksSqlParser.js";
import { AssignmentContext } from "./StarrocksSqlParser.js";
import { WhereClauseContext } from "./StarrocksSqlParser.js";
import { HavingClauseContext } from "./StarrocksSqlParser.js";
import { HintContext } from "./StarrocksSqlParser.js";
import { HintStatementContext } from "./StarrocksSqlParser.js";
import { FromClauseContext } from "./StarrocksSqlParser.js";
import { FunctionKindContext } from "./StarrocksSqlParser.js";
import { TemporalClauseContext } from "./StarrocksSqlParser.js";
import { AggregationClauseContext } from "./StarrocksSqlParser.js";
import { GroupByClauseContext } from "./StarrocksSqlParser.js";
import { GroupingAnalyticsContext } from "./StarrocksSqlParser.js";
import { GroupingElementContext } from "./StarrocksSqlParser.js";
import { GroupingSetContext } from "./StarrocksSqlParser.js";
import { PivotClauseContext } from "./StarrocksSqlParser.js";
import { PivotColumnContext } from "./StarrocksSqlParser.js";
import { PivotValueContext } from "./StarrocksSqlParser.js";
import { UnpivotClauseContext } from "./StarrocksSqlParser.js";
import { UnpivotNullClauseContext } from "./StarrocksSqlParser.js";
import { UnpivotOperatorContext } from "./StarrocksSqlParser.js";
import { UnpivotSingleValueColumnClauseContext } from "./StarrocksSqlParser.js";
import { UnpivotMultiValueColumnClauseContext } from "./StarrocksSqlParser.js";
import { UnpivotColumnSetContext } from "./StarrocksSqlParser.js";
import { UnpivotValueColumnContext } from "./StarrocksSqlParser.js";
import { UnpivotNameColumnContext } from "./StarrocksSqlParser.js";
import { UnpivotColumnAndAliasContext } from "./StarrocksSqlParser.js";
import { UnpivotColumnContext } from "./StarrocksSqlParser.js";
import { UnpivotAliasContext } from "./StarrocksSqlParser.js";
import { IfNotExistsContext } from "./StarrocksSqlParser.js";
import { IfExistsContext } from "./StarrocksSqlParser.js";
import { LateralViewContext } from "./StarrocksSqlParser.js";
import { SetQuantifierContext } from "./StarrocksSqlParser.js";
import { RelationContext } from "./StarrocksSqlParser.js";
import { RelationExtensionContext } from "./StarrocksSqlParser.js";
import { JoinRelationContext } from "./StarrocksSqlParser.js";
import { JoinTypeContext } from "./StarrocksSqlParser.js";
import { JoinCriteriaContext } from "./StarrocksSqlParser.js";
import { SampleContext } from "./StarrocksSqlParser.js";
import { SampleMethodContext } from "./StarrocksSqlParser.js";
import { IdentifierListContext } from "./StarrocksSqlParser.js";
import { IdentifierSeqContext } from "./StarrocksSqlParser.js";
import { OrderedIdentifierListContext } from "./StarrocksSqlParser.js";
import { OrderedIdentifierContext } from "./StarrocksSqlParser.js";
import { IdentifierCommentListContext } from "./StarrocksSqlParser.js";
import { IdentifierCommentContext } from "./StarrocksSqlParser.js";
import { RelationPrimaryContext } from "./StarrocksSqlParser.js";
import { InlineTableContext } from "./StarrocksSqlParser.js";
import { FunctionTableSubqueryArgumentContext } from "./StarrocksSqlParser.js";
import { TableArgumentPartitioningContext } from "./StarrocksSqlParser.js";
import { FunctionTableNamedArgumentExpressionContext } from "./StarrocksSqlParser.js";
import { FunctionTableReferenceArgumentContext } from "./StarrocksSqlParser.js";
import { FunctionTableArgumentContext } from "./StarrocksSqlParser.js";
import { FunctionTableContext } from "./StarrocksSqlParser.js";
import { TableAliasContext } from "./StarrocksSqlParser.js";
import { RowFormatContext } from "./StarrocksSqlParser.js";
import { MultipartIdentifierListContext } from "./StarrocksSqlParser.js";
import { MultipartIdentifierContext } from "./StarrocksSqlParser.js";
import { MultipartIdentifierPropertyListContext } from "./StarrocksSqlParser.js";
import { MultipartIdentifierPropertyContext } from "./StarrocksSqlParser.js";
import { TableIdentifierContext } from "./StarrocksSqlParser.js";
import { ViewIdentifierContext } from "./StarrocksSqlParser.js";
import { NamedExpressionContext } from "./StarrocksSqlParser.js";
import { NamedExpressionSeqContext } from "./StarrocksSqlParser.js";
import { PartitionFieldListContext } from "./StarrocksSqlParser.js";
import { PartitionFieldContext } from "./StarrocksSqlParser.js";
import { TransformContext } from "./StarrocksSqlParser.js";
import { TransformArgumentContext } from "./StarrocksSqlParser.js";
import { ExpressionContext } from "./StarrocksSqlParser.js";
import { NamedArgumentExpressionContext } from "./StarrocksSqlParser.js";
import { FunctionArgumentContext } from "./StarrocksSqlParser.js";
import { ExpressionSeqContext } from "./StarrocksSqlParser.js";
import { BooleanExpressionContext } from "./StarrocksSqlParser.js";
import { PredicateContext } from "./StarrocksSqlParser.js";
import { ValueExpressionContext } from "./StarrocksSqlParser.js";
import { DatetimeUnitContext } from "./StarrocksSqlParser.js";
import { PrimaryExpressionContext } from "./StarrocksSqlParser.js";
import { LiteralTypeContext } from "./StarrocksSqlParser.js";
import { ConstantContext } from "./StarrocksSqlParser.js";
import { ComparisonOperatorContext } from "./StarrocksSqlParser.js";
import { ArithmeticOperatorContext } from "./StarrocksSqlParser.js";
import { PredicateOperatorContext } from "./StarrocksSqlParser.js";
import { BooleanValueContext } from "./StarrocksSqlParser.js";
import { IntervalContext } from "./StarrocksSqlParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./StarrocksSqlParser.js";
import { MultiUnitsIntervalContext } from "./StarrocksSqlParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./StarrocksSqlParser.js";
import { UnitToUnitIntervalContext } from "./StarrocksSqlParser.js";
import { IntervalValueContext } from "./StarrocksSqlParser.js";
import { UnitInMultiUnitsContext } from "./StarrocksSqlParser.js";
import { UnitInUnitToUnitContext } from "./StarrocksSqlParser.js";
import { ColPositionContext } from "./StarrocksSqlParser.js";
import { TypeContext } from "./StarrocksSqlParser.js";
import { DataTypeContext } from "./StarrocksSqlParser.js";
import { QualifiedColTypeWithPositionSeqForAddContext } from "./StarrocksSqlParser.js";
import { QualifiedColTypeWithPositionForAddContext } from "./StarrocksSqlParser.js";
import { QualifiedColTypeWithPositionSeqForReplaceContext } from "./StarrocksSqlParser.js";
import { QualifiedColTypeWithPositionForReplaceContext } from "./StarrocksSqlParser.js";
import { ColDefinitionDescriptorWithPositionContext } from "./StarrocksSqlParser.js";
import { DefaultExpressionContext } from "./StarrocksSqlParser.js";
import { VariableDefaultExpressionContext } from "./StarrocksSqlParser.js";
import { ColTypeListContext } from "./StarrocksSqlParser.js";
import { ColTypeContext } from "./StarrocksSqlParser.js";
import { CreateOrReplaceTableColTypeListContext } from "./StarrocksSqlParser.js";
import { CreateOrReplaceTableColTypeContext } from "./StarrocksSqlParser.js";
import { ColDefinitionOptionContext } from "./StarrocksSqlParser.js";
import { GenerationExpressionContext } from "./StarrocksSqlParser.js";
import { ComplexColTypeListContext } from "./StarrocksSqlParser.js";
import { ComplexColTypeContext } from "./StarrocksSqlParser.js";
import { WhenClauseContext } from "./StarrocksSqlParser.js";
import { WindowClauseContext } from "./StarrocksSqlParser.js";
import { ZorderClauseContext } from "./StarrocksSqlParser.js";
import { NamedWindowContext } from "./StarrocksSqlParser.js";
import { WindowSpecContext } from "./StarrocksSqlParser.js";
import { WindowFrameContext } from "./StarrocksSqlParser.js";
import { FrameBoundContext } from "./StarrocksSqlParser.js";
import { QualifiedNameListContext } from "./StarrocksSqlParser.js";
import { FunctionNameContext } from "./StarrocksSqlParser.js";
import { FunctionNameCreateContext } from "./StarrocksSqlParser.js";
import { QualifiedNameContext } from "./StarrocksSqlParser.js";
import { ErrorCapturingIdentifierContext } from "./StarrocksSqlParser.js";
import { ErrorCapturingIdentifierExtraContext } from "./StarrocksSqlParser.js";
import { IdentifierContext } from "./StarrocksSqlParser.js";
import { StrictIdentifierContext } from "./StarrocksSqlParser.js";
import { QuotedIdentifierContext } from "./StarrocksSqlParser.js";
import { BackQuotedIdentifierContext } from "./StarrocksSqlParser.js";
import { NumberContext } from "./StarrocksSqlParser.js";
import { AlterColumnActionContext } from "./StarrocksSqlParser.js";
import { StringLitContext } from "./StarrocksSqlParser.js";
import { CommentContext } from "./StarrocksSqlParser.js";
import { VersionContext } from "./StarrocksSqlParser.js";
import { AnsiNonReservedContext } from "./StarrocksSqlParser.js";
import { StrictNonReservedContext } from "./StarrocksSqlParser.js";
import { NonReservedContext } from "./StarrocksSqlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StarrocksSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class StarrocksSqlParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `dmlStatement`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `useNamespace`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseNamespace?: (ctx: UseNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setCatalog`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCatalog?: (ctx: SetCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `createNamespace`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateNamespace?: (ctx: CreateNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceProperties`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceProperties?: (ctx: SetNamespacePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `setNamespaceLocation`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNamespaceLocation?: (ctx: SetNamespaceLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `dropNamespace`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropNamespace?: (ctx: DropNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showNamespaces`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowNamespaces?: (ctx: ShowNamespacesContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createTableLike`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTable?: (ctx: ReplaceTableContext) => Result;
    /**
     * Visit a parse tree produced by the `analyze`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze?: (ctx: AnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeTables`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTables?: (ctx: AnalyzeTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumn`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumn?: (ctx: AlterTableAddColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddColumns`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddColumns?: (ctx: AlterTableAddColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTableColumn`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTableColumn?: (ctx: RenameTableColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableDropColumn`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableDropColumn?: (ctx: AlterTableDropColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTableColumns`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTableColumns?: (ctx: DropTableColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableProperties`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableProperties?: (ctx: SetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `unsetTableProperties`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsetTableProperties?: (ctx: UnsetTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAlterColumn`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAlterColumn?: (ctx: AlterTableAlterColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveChangeColumn`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveChangeColumn?: (ctx: HiveChangeColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveReplaceColumns`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveReplaceColumns?: (ctx: HiveReplaceColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDe`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDe?: (ctx: SetTableSerDeContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableSerDeProperties`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableSerDeProperties?: (ctx: SetTableSerDePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `addTablePartition`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddTablePartition?: (ctx: AddTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTablePartition`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTablePartition?: (ctx: RenameTablePartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTablePartitions`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTablePartitions?: (ctx: DropTablePartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `setTableLocation`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTableLocation?: (ctx: SetTableLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverPartitions`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverPartitions?: (ctx: RecoverPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewRewrite`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewRewrite?: (ctx: AlterMaterializedViewRewriteContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMaterializedViewProperties`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedViewProperties?: (ctx: AlterMaterializedViewPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropView`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createTempViewUsing`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTempViewUsing?: (ctx: CreateTempViewUsingContext) => Result;
    /**
     * Visit a parse tree produced by the `alterViewQuery`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterViewQuery?: (ctx: AlterViewQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `createFunction`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFunction`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `declareVariable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareVariable?: (ctx: DeclareVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropVariable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropVariable?: (ctx: DropVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `explainStatement`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `showTables`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTables?: (ctx: ShowTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableExtended`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableExtended?: (ctx: ShowTableExtendedContext) => Result;
    /**
     * Visit a parse tree produced by the `showTblProperties`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTblProperties?: (ctx: ShowTblPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showViews`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowViews?: (ctx: ShowViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitions`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showCurrentNamespace`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCurrentNamespace?: (ctx: ShowCurrentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogs`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showMaterializedViews`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowMaterializedViews?: (ctx: ShowMaterializedViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `describeFunction`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFunction?: (ctx: DescribeFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `describeNamespace`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeNamespace?: (ctx: DescribeNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `describeRelation`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeRelation?: (ctx: DescribeRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `describeQuery`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeQuery?: (ctx: DescribeQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `commentNamespace`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentNamespace?: (ctx: CommentNamespaceContext) => Result;
    /**
     * Visit a parse tree produced by the `commentTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentTable?: (ctx: CommentTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTable?: (ctx: RefreshTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshFunction`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshFunction?: (ctx: RefreshFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshResource`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshResource?: (ctx: RefreshResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `cacheTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheTable?: (ctx: CacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unCacheTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnCacheTable?: (ctx: UnCacheTableContext) => Result;
    /**
     * Visit a parse tree produced by the `clearCache`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearCache?: (ctx: ClearCacheContext) => Result;
    /**
     * Visit a parse tree produced by the `loadData`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadData?: (ctx: LoadDataContext) => Result;
    /**
     * Visit a parse tree produced by the `truncateTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `repairTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `manageResource`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitManageResource?: (ctx: ManageResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `failNativeCommand`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFailNativeCommand?: (ctx: FailNativeCommandContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneInterval`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneInterval?: (ctx: SetTimeZoneIntervalContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZone`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZone?: (ctx: SetTimeZoneContext) => Result;
    /**
     * Visit a parse tree produced by the `setTimeZoneAny`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTimeZoneAny?: (ctx: SetTimeZoneAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableAssignment`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableAssignment?: (ctx: SetVariableAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableMultiAssignment`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableMultiAssignment?: (ctx: SetVariableMultiAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfig`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfig?: (ctx: SetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAndValue`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAndValue?: (ctx: SetConfigAndValueContext) => Result;
    /**
     * Visit a parse tree produced by the `setConfigAnyKey`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetConfigAnyKey?: (ctx: SetConfigAnyKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `setAny`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetAny?: (ctx: SetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `resetConfig`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetConfig?: (ctx: ResetConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `resetAny`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetAny?: (ctx: ResetAnyContext) => Result;
    /**
     * Visit a parse tree produced by the `createIndex`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndex`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `optimizeTable`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptimizeTable?: (ctx: OptimizeTableContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupportHiveCommands`
     * labeled alternative in `StarrocksSqlParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportHiveCommands?: (ctx: UnsupportHiveCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.timezone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimezone?: (ctx: TimezoneContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.configKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigKey?: (ctx: ConfigKeyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.configValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConfigValue?: (ctx: ConfigValueContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unsupportedHiveNativeCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedHiveNativeCommands?: (ctx: UnsupportedHiveNativeCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.createTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableHeader?: (ctx: CreateTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.replaceTableHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTableHeader?: (ctx: ReplaceTableHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.bucketSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBucketSpec?: (ctx: BucketSpecContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.skewSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkewSpec?: (ctx: SkewSpecContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.locationSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocationSpec?: (ctx: LocationSpecContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.commentSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentSpec?: (ctx: CommentSpecContext) => Result;
    /**
     * Visit a parse tree produced by the `queryStatement`
     * labeled alternative in `StarrocksSqlParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.insertInto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertInto?: (ctx: InsertIntoContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.partitionSpecLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpecLocation?: (ctx: PartitionSpecLocationContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.partitionVal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionVal?: (ctx: PartitionValContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespace?: (ctx: NamespaceContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namespaces`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaces?: (ctx: NamespacesContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.describeFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeFuncName?: (ctx: DescribeFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.describeColName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeColName?: (ctx: DescribeColNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.ctes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCtes?: (ctx: CtesContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namedQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedQuery?: (ctx: NamedQueryContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableProvider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProvider?: (ctx: TableProviderContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.createTableClauses`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableClauses?: (ctx: CreateTableClausesContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableLifecycle`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableLifecycle?: (ctx: TableLifecycleContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.propertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyList?: (ctx: PropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.expressionPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionPropertyList?: (ctx: ExpressionPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.expressionProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProperty?: (ctx: ExpressionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.constantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantList?: (ctx: ConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.nestedConstantList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedConstantList?: (ctx: NestedConstantListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.createFileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFileFormat?: (ctx: CreateFileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.fileFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileFormat?: (ctx: FileFormatContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.storageHandler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageHandler?: (ctx: StorageHandlerContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `insertFromQuery`
     * labeled alternative in `StarrocksSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertFromQuery?: (ctx: InsertFromQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `multipleInsert`
     * labeled alternative in `StarrocksSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipleInsert?: (ctx: MultipleInsertContext) => Result;
    /**
     * Visit a parse tree produced by the `deleteFromTable`
     * labeled alternative in `StarrocksSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteFromTable?: (ctx: DeleteFromTableContext) => Result;
    /**
     * Visit a parse tree produced by the `updateTable`
     * labeled alternative in `StarrocksSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTable?: (ctx: UpdateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `mergeIntoTable`
     * labeled alternative in `StarrocksSqlParser.dmlStatementNoWith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeIntoTable?: (ctx: MergeIntoTableContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namespaceName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceName?: (ctx: NamespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namespaceNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamespaceNameCreate?: (ctx: NamespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.viewNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.viewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.columnNameSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameSeq?: (ctx: ColumnNameSeqContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.columnNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.identifierReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierReference?: (ctx: IdentifierReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.multiInsertQueryBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiInsertQueryBody?: (ctx: MultiInsertQueryBodyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTerm?: (ctx: QueryTermContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.fromStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatement?: (ctx: FromStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.fromStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromStatementBody?: (ctx: FromStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.setClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetClause?: (ctx: SetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.matchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedClause?: (ctx: MatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.notMatchedClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedClause?: (ctx: NotMatchedClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.notMatchedBySourceClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceClause?: (ctx: NotMatchedBySourceClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.matchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchedAction?: (ctx: MatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.notMatchedAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedAction?: (ctx: NotMatchedActionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.notMatchedBySourceAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotMatchedBySourceAction?: (ctx: NotMatchedBySourceActionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.hint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHint?: (ctx: HintContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionKind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionKind?: (ctx: FunctionKindContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.temporalClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTemporalClause?: (ctx: TemporalClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.aggregationClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationClause?: (ctx: AggregationClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.groupingAnalytics`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingAnalytics?: (ctx: GroupingAnalyticsContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElement?: (ctx: GroupingElementContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.pivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotClause?: (ctx: PivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.pivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotColumn?: (ctx: PivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.pivotValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotValue?: (ctx: PivotValueContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotClause?: (ctx: UnpivotClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotNullClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNullClause?: (ctx: UnpivotNullClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotOperator?: (ctx: UnpivotOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotSingleValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotSingleValueColumnClause?: (ctx: UnpivotSingleValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotMultiValueColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotMultiValueColumnClause?: (ctx: UnpivotMultiValueColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotColumnSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnSet?: (ctx: UnpivotColumnSetContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotValueColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotValueColumn?: (ctx: UnpivotValueColumnContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotNameColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotNameColumn?: (ctx: UnpivotNameColumnContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotColumnAndAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumnAndAlias?: (ctx: UnpivotColumnAndAliasContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotColumn?: (ctx: UnpivotColumnContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unpivotAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotAlias?: (ctx: UnpivotAliasContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.relationExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationExtension?: (ctx: RelationExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleMethod?: (ctx: SampleMethodContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.orderedIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifierList?: (ctx: OrderedIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.orderedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderedIdentifier?: (ctx: OrderedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.identifierCommentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierCommentList?: (ctx: IdentifierCommentListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.identifierComment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierComment?: (ctx: IdentifierCommentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.inlineTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTable?: (ctx: InlineTableContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionTableSubqueryArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableSubqueryArgument?: (ctx: FunctionTableSubqueryArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableArgumentPartitioning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableArgumentPartitioning?: (ctx: TableArgumentPartitioningContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionTableNamedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableNamedArgumentExpression?: (ctx: FunctionTableNamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionTableReferenceArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableReferenceArgument?: (ctx: FunctionTableReferenceArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionTableArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTableArgument?: (ctx: FunctionTableArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTable?: (ctx: FunctionTableContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.rowFormat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormat?: (ctx: RowFormatContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.multipartIdentifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierList?: (ctx: MultipartIdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.multipartIdentifierPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierPropertyList?: (ctx: MultipartIdentifierPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.multipartIdentifierProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierProperty?: (ctx: MultipartIdentifierPropertyContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.tableIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableIdentifier?: (ctx: TableIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.viewIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewIdentifier?: (ctx: ViewIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.partitionFieldList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionFieldList?: (ctx: PartitionFieldListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.partitionField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionField?: (ctx: PartitionFieldContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform?: (ctx: TransformContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namedArgumentExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgumentExpression?: (ctx: NamedArgumentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.expressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionSeq?: (ctx: ExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.literalType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralType?: (ctx: LiteralTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.arithmeticOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOperator?: (ctx: ArithmeticOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.predicateOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateOperator?: (ctx: PredicateOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unitInMultiUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInMultiUnits?: (ctx: UnitInMultiUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.unitInUnitToUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitInUnitToUnit?: (ctx: UnitInUnitToUnitContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.colPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColPosition?: (ctx: ColPositionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataType?: (ctx: DataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.qualifiedColTypeWithPositionSeqForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForAdd?: (ctx: QualifiedColTypeWithPositionSeqForAddContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.qualifiedColTypeWithPositionForAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForAdd?: (ctx: QualifiedColTypeWithPositionForAddContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.qualifiedColTypeWithPositionSeqForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionSeqForReplace?: (ctx: QualifiedColTypeWithPositionSeqForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.qualifiedColTypeWithPositionForReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedColTypeWithPositionForReplace?: (ctx: QualifiedColTypeWithPositionForReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.colDefinitionDescriptorWithPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionDescriptorWithPosition?: (ctx: ColDefinitionDescriptorWithPositionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.defaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultExpression?: (ctx: DefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.variableDefaultExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefaultExpression?: (ctx: VariableDefaultExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.colTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColTypeList?: (ctx: ColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.colType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColType?: (ctx: ColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.createOrReplaceTableColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColTypeList?: (ctx: CreateOrReplaceTableColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.createOrReplaceTableColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateOrReplaceTableColType?: (ctx: CreateOrReplaceTableColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.colDefinitionOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColDefinitionOption?: (ctx: ColDefinitionOptionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.generationExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerationExpression?: (ctx: GenerationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.complexColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.zorderClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZorderClause?: (ctx: ZorderClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.namedWindow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedWindow?: (ctx: NamedWindowContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.functionNameCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.quotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.backQuotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.alterColumnAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnAction?: (ctx: AlterColumnActionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.stringLit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLit?: (ctx: StringLitContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVersion?: (ctx: VersionContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.ansiNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.strictNonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;
    /**
     * Visit a parse tree produced by `StarrocksSqlParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

