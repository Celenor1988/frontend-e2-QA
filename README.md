## Proyecto: Test Automation Engineer

##Descripción

Este proyecto implementa pruebas E2E automatizadas para un sistema web, abordando funcionalidades críticas desde el punto de vista del usuario. Se utilizan Cypress y Cucumber para realizar pruebas sobre la interfaz de usuario (frontend), simulando interacciones reales de usuarios.

##Tecnologías

- Cypress
- Cucumber (Gherkin Syntax)
- Node.js

## Instalación y ejecución

1. Instala las dependencias:
   npm install

2. Corre Cypress UI:
   npx cypress open

3. O bien ejecuta las pruebas por línea de comandos:
   npx cypress run

## Escenarios probados

- Inicio de sesión exitoso.
- Acceso denegado con credenciales inválidas.
- Registro de usuario.
- Navegación y visualización de artículos.
- Edición de artículos.
- Eliminación de artículos.

## Indicadores

- Cobertura de requisitos: 100% de las historias de usuario implementadas.
- Pruebas pasadas/fallidas: Todas las pruebas ejecutan exitosamente (ver reporte HTML generado por Cypress).
- Riesgos detectados: No se encontraron bloqueos críticos hasta el momento.


