export interface IStdOut {
    newline(): void;
    pr(text: string): void;
    prn(text: string): void;
    space(): void;
}
