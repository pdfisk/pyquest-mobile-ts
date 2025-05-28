export class ServerUtil {

    static methodHasBody(method: string): boolean {
        return false;
    }

    static serializeData(req: any, data: any): string {
        return 'data';
    }
}
