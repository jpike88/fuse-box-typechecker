import { codeLog } from './colors';

function parseArguments(args: Array<any>) {
    let group;
    let message;
    let vars;
    if (args.length === 1) message = args[0];
    if (args.length === 2) {
        if (typeof args[1] === 'object') {
            message = args[0];
            vars = args[1];
        }
        if (typeof args[1] === 'string') {
            group = args[0];
            message = args[1];
        }
    }
    if (args.length === 3) {
        group = args[0];
        message = args[1];
        vars = args[2];
    }
    return { group, message, vars };
}
export class FuseLog {
    indent = '  ';
    log(_type: string, result: string) {
        console.log(result);
    }

    getString(message: string, vars?: any) {
        return codeLog(message, vars);
    }

    echo(message: string, vars?: any) {
        this.log('echo', this.getString(message, vars));
    }

    info(...args: any) {
        const { group, message, vars } = parseArguments(args);
        let str = this.indent;
        if (group) {
            str += `<bold><cyan>${group}</cyan></bold> `;
        }
        str += `${message}`;
        this.log('info', codeLog(str, vars));
    }


}

export function createLog<L>(_CustomLogger?: L) {
    return new FuseLog();
}

// class MyLogger extends FuseLog {}

// const log = new MyLogger();
// console.log(' ');
// console.log(' ');
// log.info('Processing', 'Some information here');
// log.info('Processing', 'Doing something else');
// log.info('Processing', 'Creating properties');

// console.log(' ');

// log.warn('Something needs your attention');
// log.warn('Attention', 'You should read some documentation');
// log.success('Nice');
// log.success('Success', "You've noticed that message");

// console.log(' ');

// log.error('Generic error', 'You are not supposed to do that');
// log.error('You are clearly missing an important flag');

// console.log(' ');

// log.meta('Event', 'Something is happening');
// log.meta('Event', 'Will happen soon');
// log.meta('Event', 'Not yet');
// log.meta('Doing that', `We're getting close`);

// console.log(' ');

// log.success("Hey $name, we'e good now!", { name: 'FuseBox' });
// log.success('Completed', 'Now we totally <magenta>finished</magenta>');

// console.log(' ');
// console.log(' ');
