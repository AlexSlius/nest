import { Injectable } from "@nestjs/common";
import { InterfaceBaseCategory, InterfaceCategory } from "../interfaces/category.interface";

@Injectable()
export class CategoryFormation {
    formation(categorys: InterfaceBaseCategory[], id: number | null = null): InterfaceCategory[] | InterfaceCategory {
        const categoryMap = new Map();

        categorys.forEach((category: InterfaceCategory) => {
            category.children = [];
            categoryMap.set(category.id, category);
        });

        const hierarchy: InterfaceCategory[] = [];

        categorys.forEach((category: InterfaceCategory) => {
            if (category.parentId && (id === null ? true : !!hierarchy.length)) {
                const parent = categoryMap.get(category.parentId);

                if (parent) {
                    parent.children.push(category);
                }
            } else {
                if (id === null ? true : id === category.id) {
                    hierarchy.push(category);
                }
            }
        })

        if (id === null) {
            return hierarchy
        }

        return hierarchy[0]
    }
}