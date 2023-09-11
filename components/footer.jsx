export default function Footer() {
  return (
    <footer className="md:grid md:grid-cols-4 gap-10 bg-gradient-to-t from-primary pt-24 px-4 pb-4">
      <p>
        SOFT EIS is an independent print magazine published in Berlin. Each
        issue deconstructs a different topic by exploring the dualities of ideas
        and all the conversations in between.
      </p>
      <div>
        <p>Editions</p>
      </div>
      {/* <div>
        <p>Bulletin</p>
      </div> */}
      <div>
        <p>Shop</p>
      </div>
      <div>
        <ul>
          <li>About</li>
          <li>Work with us</li>
          <li>Checkout</li>
          <li>A-Z</li>
        </ul>
      </div>
    </footer>
  );
}
