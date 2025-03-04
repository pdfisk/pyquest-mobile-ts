import { StringConstants } from '../constants/StringConstants';

export class StringUtil {

    static asInt ( x: any ): number {
        return parseInt( this.asString( x ) );
    }

    static asString ( x: any ): string {
        return `${ x }`;
    }

    static className ( instance: any | undefined ) {
        if ( instance === undefined || instance.constructor === undefined )
            return 'undefined';
        return instance.constructor.name;
    }

    static format ( template: string, ...args: any[] ): string {
        return ( window as any ).qx.lang.String.format( template, args );
    }

    static fromEncodedPassword ( encodedPassword: string ): string {
        return atob( this.reverseString( encodedPassword ) );
    }

    static isQuotedString ( str: string ): boolean {
        return this.isQuotedString_1( str ) || this.isQuotedString_3( str );
    }

    static isQuotedString_1 ( str: string ): boolean {
        return str.startsWith( StringConstants.SINGLE_QUOTE_1 ) || str.startsWith( StringConstants.DOUBLE_QUOTE_1 );
    }

    static isQuotedString_3 ( str: string ): boolean {
        return str.startsWith( StringConstants.SINGLE_QUOTE_3 ) || str.startsWith( StringConstants.DOUBLE_QUOTE_3 );
    }

    static padLeftChar ( text: string, len: number, char: string ): string {
        let value: string = text.toString();;
        while ( value.length < len )
            value = char + value;
        return value;
    }

    static padLeftSpace ( text: string, len: number ): string {
        let padding = '';
        while ( padding.length < len )
            padding += ' ';
        return `${ padding }${ text }`;
    }

    static padLeftZero ( text: string, len: number ): string {
        return this.padLeftChar( text, len, '0' );
    }

    static reverseString ( aString: string ): string {
        return aString.split( '' ).reverse().join( '' );
    }

    static trimString ( str: string ): string {
        if ( this.isQuotedString( str ) )
            return this.trimQuotedString( str );
        else
            return str;
    }

    static trimQuotedString ( quotedString: string ): string {
        let n = 0;
        if ( this.isQuotedString_1( quotedString ) )
            n = 1;
        else if ( this.isQuotedString_3( quotedString ) )
            n = 3;
        return quotedString.slice( n, quotedString.length - 2 * n + 1 );
    }

    static truncate ( str: string, max: number = -1 ): string {
        if ( max < 4 || str.length <= max )
            return str;
        if ( str.startsWith( "'" ) && str.endsWith( "'" ) )
            str = str.substring( 1, str.length - 2 );
        return `'${ str.substring( 0, max - 3 ) }...'`;
    }

    static toEncodedPassword ( unencodedPassword: string ): string {
        return this.reverseString( btoa( unencodedPassword ) );
    }

}
