import "./style/globals.css";

export default function RootLayout({ children }) {
  return (
    <><html lang="en">
      <head>
        <title>My App</title>
      </head>
    </html><body>{children}</body></>
    );
}
