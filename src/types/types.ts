// define transaction type
export type Transaction = {
    id: number;
    amount: number;
    category: Category;
    date: string;
    description: string;
    type: "income" | "expense";
};

// define category type
export type Category = {
    id: number;
    name: string;
};
