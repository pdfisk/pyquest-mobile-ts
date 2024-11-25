import { CategoryConstants } from "../constants/CategoryConstants";

export class CategoryUtil {

    static getCategories(): string[] {
        return [
            CategoryConstants.CategoryLabelAll,
            CategoryConstants.CategoryLabelGames,
            CategoryConstants.CategoryLabelStories,
            CategoryConstants.CategoryLabelTutorials
        ];
    }

}
