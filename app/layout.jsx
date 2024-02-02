export const metadata = {
    title: 'Gabnet',
    description:
        'Gabnet is a walk-in and online store that sells a variety of printing machines from screen printing machines, sublimation, and heat transfer machines, new and refurbished printers, printer spare parts, printing finishing machines, heavy-duty printing machines, toners and inks for printers, embroidery machines, industrial printers, and special commercial printing machines.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>

                {children}
            </body>
        </html>
    );
}
