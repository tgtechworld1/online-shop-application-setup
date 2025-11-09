
export default function Cart() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Shopping Cart</h1>
      <div className="bg-muted rounded-lg p-12 text-center">
        <p className="text-muted-foreground text-lg">Your cart is empty</p>
      </div>
    </div>
  );
}