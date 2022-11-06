export enum LogLevel {
    Off = 0,
    Error,
    Warning,
    Info,
    Debug,
    Trace
}

export type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;

export class Logger {

    static level = LogLevel.Debug;

    static outputs: LogOutput[] = []

    static prod() {
        Logger.level = LogLevel.Warning;
    }

    constructor(private source?: string) {
    }

    trace(...objects: any[]): void {
        return this.log(console.trace, LogLevel.Trace, objects);
    }

    debug(...objects: any[]): void {
        this.log(console.log, LogLevel.Debug, objects);
    }

    info(...objects: any[]): void {
        this.log(console.info, LogLevel.Info, objects);
    }

    warn(...objects: any[]): void {
        this.log(console.warn, LogLevel.Warning, objects);
    }

    error(...objects: any[]): void {
        this.log(console.error, LogLevel.Error, objects);
    }

    private log(func: (...args: any[]) => void, level: LogLevel, objects: any[]): void {
        if (level <= Logger.level) {
            const log = this.source ? [`[${this.source}]`].concat(`[${this.logLevel(level)}] >>`).concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
        }
    }

    private logLevel(level: LogLevel): string {
        switch(level) {
            case LogLevel.Trace:
                return 'TRACE';
            case LogLevel.Debug:
                return 'DEBUG';
            case LogLevel.Info:
                return 'INFO';
            case LogLevel.Warning:
                return 'WARN';
            case LogLevel.Error:
                return 'ERROR';
            default:
                return '';
        }
    }
}
