import puppeteer from "puppeteer";

export class Cabbage {
    private _width: number = 0;
    private _height: number = 0;
    private _isEntry: boolean = false;

    private constructor() {}

    static createCabbageInstance(width: number, height: number): Cabbage {
        const cabbageInstance = new Cabbage();
        cabbageInstance.width = width;
        cabbageInstance.height = height;

        return cabbageInstance;
    }

    public async openHeadlessChromeWindow(): Promise<void> {
        const browser = await puppeteer.launch({
            headless: false,
            args: [
                "--no-sandbox",
                "--start-fullscreen", // Start in fullscreen mode
                "--hide-scrollbars", // Hide scrollbars
                "--disable-infobars", // Disable info bars (such as "Chrome is being controlled by automated test software")
                "--no-first-run", // Skip first run wizards
                "--noerrdialogs", // Suppresses all error dialogs
                "--no-default-browser-check", // Disables the default browser check
                "--disable-notifications", // Disables notification permissions
                "--disable-translate", // Disables translation prompt
                // Add any other args you need to customize further
            ],
        });
        const page = await browser.newPage();

        // Set viewport size based on provided width and height
        await page.setViewport({ width: this._width, height: this._height });

        // Navigate to a specific URL or about:blank if no URL is provided
        await page.goto("about:blank");

        // Create a canvas in the browser page with specified width and height
        await page.evaluate(
            (width, height) => {
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                document.body.appendChild(canvas);
            },
            this._width,
            this._height
        );

        // Keep the browser open for demonstration purposes
        // To close the browser, comment out the line below
        await new Promise(() => {}); // This keeps the browser open until manually closed
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    set height(_height) {
        if (_height <= 0) {
            throw new Error("Height must be a positive number");
        }
        this._height = _height;
    }
    set width(_width) {
        if (_width <= 0) {
            throw new Error("Width must be a positive number");
        }
        this._width = _width;
    }

    public setIsEntry(value: boolean) {
        this._isEntry = value;
    }

    get isEntry(): boolean {
        return this._isEntry;
    }
}
