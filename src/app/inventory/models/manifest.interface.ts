import { InventoryItem } from './inventory-item.interface';

export interface Manifest {
    id: number;
    number: string;
    status: string;
    inventoryItems: InventoryItem[];
}
