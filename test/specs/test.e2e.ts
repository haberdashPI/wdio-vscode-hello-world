import { browser, expect } from '@wdio/globals';

describe('VS Code Extension Testing', () => {
    it('should be able to load VSCode', async () => {
        const workbench = await browser.getWorkbench()
        expect(await workbench.getTitleBar().getTitle())
            .toContain('[Extension Development Host]');
    });
});

describe('Hello World Command', () => {
    it('can be run from palette', async () => {
        const workbench = await browser.getWorkbench();
        console.log('[DEBUG] running command');
        await workbench.executeCommand('>Hello World');
        const notifs = await workbench.getNotifications();
        let messages: string[] = [];
        for(let not of notifs){
            let message = await not.getMessage();
            console.log("[MESSAGE]: "+message)
            messages.push(message);
        }
        expect(messages).toContain("Hello World");
    });
});
