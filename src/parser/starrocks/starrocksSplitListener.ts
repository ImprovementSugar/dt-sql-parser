import { SingleStatementContext } from '../../lib/starrocks/StarrocksSqlParser';

import { StarrocksSqlParserListener } from '../../lib/starrocks/StarrocksSqlParserListener';
import { SplitListener } from '../common/splitListener';

export class StarrocksSqlSplitListener
    extends SplitListener<SingleStatementContext>
    implements StarrocksSqlParserListener
{
    exitSingleStatement(ctx: SingleStatementContext) {
        this._statementsContext.push(ctx);
    }
}
