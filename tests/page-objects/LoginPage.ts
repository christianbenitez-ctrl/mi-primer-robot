// 1. Importamos las herramientas necesarias
import { Page, Locator } from '@playwright/test';

// 2. Exportamos la "Clase" (Plantilla del asistente) para poder usarla en otros archivos
export class LoginPage {
    // La memoria del asistente: aquí le decimos qué elementos existen
    readonly page: Page;
    readonly cajaUsuario: Locator;
    readonly cajaPassword: Locator;
    readonly botonLogin: Locator;

    // 3. El Constructor: Son las instrucciones que el asistente lee apenas lo contratas
    constructor(page: Page) {
        this.page = page; // Le pasamos la pestaña actual del navegador
        // Aquí centralizamos las identidades secretas (los localizadores)
        this.cajaUsuario = page.locator('[data-test="username"]');
        this.cajaPassword = page.locator('[data-test="password"]');
        this.botonLogin = page.locator('[data-test="login-button"]');
    }

    // 4. La Acción: Le enseñamos una tarea completa agrupando pasos
    async iniciarSesion(usuario: string, password: string) {
        await this.cajaUsuario.fill(usuario);
        await this.cajaPassword.fill(password);
        await this.botonLogin.click();
    }
}