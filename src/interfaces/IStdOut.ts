export interface IStdOut {
    getId(): number;
    newline(): void;
    pr(text: string): void;
    prn(text: string): void;
    space(): void;
}
