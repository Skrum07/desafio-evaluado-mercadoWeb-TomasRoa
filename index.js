import express from 'express';
import exphbs from 'express-handlebars';
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

// Static Files
app.use(express.static("assets"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// View Engine
app.set("view engine", "hbs");
app.engine("hbs", exphbs.engine({
    layoutsDir: __dirname + "/views",
    extname: "hbs",
}));

// Routes
app.get("/", (req, res) => {
    res.render("home", { // Pass data as an object
        title: "productos",
        producto: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
    });
});

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto http://localhost:${port}`);
});