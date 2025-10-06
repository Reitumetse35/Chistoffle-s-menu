
// Define an interface for a PaymentMethod
interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

// Define the available payment methods
const paymentMethods: PaymentMethod[] = [
  { id: "credit_card", name: "Credit Card", description: "Pay with your Visa, Mastercard, or American Express." },
  { id: "paypal", name: "PayPal", description: "Pay securely with your PayPal account." },
  { id: "bank_transfer", name: "Bank Transfer", description: "Transfer funds directly from your bank account." },
  { id: "cash_on_delivery", name: "Cash on Delivery", description: "Pay with cash upon delivery of your order." },
];

// Function to display the payment method menu
function displayPaymentMethodMenu(): void {
  console.log("--- Select a Payment Method ---");
  paymentMethods.forEach((method, index) => {
    console.log(`${index + 1}. ${method.name} (${method.description})`);
  });
  console.log("----------------------------");
}

// Function to get user selection 
function getPaymentMethodSelection(): PaymentMethod | undefined {
  displayPaymentMethodMenu();
  const userInput = prompt("Enter the number of your preferred payment method:");

  if (userInput !== null) {
    const selectedIndex = parseInt(userInput) - 1;
    if (selectedIndex >= 0 && selectedIndex < paymentMethods.length) {
      return paymentMethods[selectedIndex];
    }
  }
  console.log("Invalid selection. Please try again.");
  return undefined;
}

// Example usage:
const selectedPaymentMethod = getPaymentMethodSelection();

if (selectedPaymentMethod) {
  console.log(`You selected: ${selectedPaymentMethod.name}`);
  // In a real application, you would proceed with the selected payment method's logic here.
} else {
  console.log("No payment method was selected.");
}

