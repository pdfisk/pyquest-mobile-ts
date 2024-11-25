import { CategoryConstants } from "../constants/CategoryConstants";
import { StringUtil } from "./StringUtil";

export class CategoryUtil {

    static getCategories(): string[] {
        return [
            CategoryConstants.CategoryLabelAll,
            CategoryConstants.CategoryLabelGames,
            CategoryConstants.CategoryLabelStories,
            CategoryConstants.CategoryLabelTutorials
        ];
    }

    static getCategoryTag(index: number): string {
        return StringUtil.asTag(this.getCategories()[index]);
    }

}
