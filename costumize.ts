// menu.ts

type MenuItem = {
  id: number;
  name: string;
  price: number;
};

class Menu {
  private items: MenuItem[] = [];
  private nextId: number = 1;

  // Add a new item to the menu
  addItem(name: string, price: number): void {
    const newItem: MenuItem = {
      id: this.nextId++,
      name,
      price,
    };
    this.items.push(newItem);
    console.log(`✅ Added: ${name} - $${price.toFixed(2)}`);  // Corrected line
  }
}
