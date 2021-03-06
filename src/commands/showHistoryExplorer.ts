'use strict';
import { Command, Commands } from './common';
import { GitExplorerView } from '../configuration';
import { Container } from '../container';

export class ShowHistoryExplorerCommand extends Command {

    constructor() {
        super(Commands.ShowHistoryExplorer);
    }

    execute() {
        if (Container.config.historyExplorer.enabled) {
            return Container.historyExplorer.show();
        }

        return Container.gitExplorer.show(GitExplorerView.History);
    }
}