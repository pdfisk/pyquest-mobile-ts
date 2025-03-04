import { IStdOut } from '../interfaces/IStdOut';
import { StringUtil } from "./StringUtil";

export class StringWriter implements IStdOut {
    buffer: string[] = [];
    offset: number = 0;

    asString (): string {
        return this.buffer.join( '' );
    }

    clear (): StringWriter {
        this.buffer = [];
        return this;
    }

    comma (): StringWriter {
        this.pr( ',' );
        return this;
    }

    dedent () {
        if ( this.offset >= 4 )
            this.offset -= 4;
    }

    getId (): number {
        return 0;
    }

    indent () {
        this.offset += 4;
    }

    newline (): StringWriter {
        this.buffer.push( `\n` );
        return this;
    }

    pr ( obj: any, indent: number = 0 ): StringWriter {
        let text = `${ obj }`;
        const totalIndent = this.offset + indent;
        if ( totalIndent > 0 )
            text = StringUtil.padLeftSpace( text, totalIndent );
        this.buffer.push( text );
        return this;
    }

    prn ( obj: any, indent: number = 0 ): StringWriter {
        this.pr( obj, indent );
        this.newline();
        return this;
    }

    space (): StringWriter {
        this.pr( ' ' );
        return this;
    }

}
