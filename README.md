<h1>📦 Stocklend</h1>

<p>Sistema de gestión de inventario y préstamos de ítems.</p>

<hr>

<h2>📌 Descripción</h2>
<p><strong>Stocklend</strong> es un sistema backend que permite administrar un inventario de materiales y gestionar préstamos a usuarios (alumnos), donde un administrador controla la entrega y devolución de los ítems.</p>

<hr>

<h2>🚧 Estado del proyecto</h2>
<p>En desarrollo activo. Actualmente enfocado en la construcción del backend y endpoints principales.</p>

<hr>

<h2>🛠️ Tecnologías</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>MariaDB</li>
  <li>SQL puro</li>
</ul>

<hr>

<h2>🗄️ Estructura de la base de datos</h2>
<p>Tablas principales:</p>

<ul>
  <li><code>administrators</code></li>
  <li><code>borrowers</code></li>
  <li><code>categories</code></li>
  <li><code>item_types</code></li>
  <li><code>loans</code></li>
</ul>

<h3>🔗 Relación principal</h3>
<p>Un <strong>administrador</strong> gestiona los préstamos cuando un <strong>usuario (borrower)</strong> solicita un ítem del inventario.</p>

<hr>

<h2>✅ Funcionalidades actuales</h2>
<ul>
  <li>Crear préstamos</li>
  <li>Devolver préstamos</li>
  <li>Consultar préstamos</li>
  <li>Endpoints básicos en desarrollo</li>
</ul>

<hr>

<h2>⚙️ Ejecución del proyecto</h2>

<h3>1. Instalar dependencias</h3>
<pre><code>npm install</code></pre>

<h3>2. Configurar variables de entorno</h3>
<p>Crear un archivo <code>.env</code> con la configuración necesaria (base de datos, puerto, etc.)</p>

<h3>3. Ejecutar el servidor</h3>
<pre><code>node server.js</code></pre>

<ul>
  <li>Backend: <code>http://localhost:3000</code></li>
  <li>Base de datos: <code>3008</code></li>
</ul>

<hr>

<h2>🚀 Próximas mejoras</h2>
<ul>
  <li>Frontend</li>
  <li>Organización en carpetas</li>
  <li>Validación de datos</li>
  <li>Mejor estructura de endpoints</li>
  <li>Autenticación</li>
</ul>

<hr>

<h2>💭 Motivación</h2>
<p>Proyecto creado para practicar backend y diseño de sistemas reales de inventario y préstamos.</p>

<hr>

<h2>📌 Notas</h2>
<p>Actualmente solo backend. El frontend será implementado en la siguiente fase.</p>
