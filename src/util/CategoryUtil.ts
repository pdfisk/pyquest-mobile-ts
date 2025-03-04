import { CategoryConstants } from "../constants/CategoryConstants";
import { HtmlStrUtil } from './HtmlStrUtil';

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
        return HtmlStrUtil.asTag(this.getCategories()[index]);
    }

}
