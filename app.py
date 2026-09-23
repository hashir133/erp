from pathlib import Path

from flask import Flask, redirect, render_template, send_from_directory


BASE_DIR = Path(__file__).resolve().parent

app = Flask(
    __name__,
    template_folder=str(BASE_DIR),
    static_folder=None,
)


@app.get("/")
def home():
    return render_template("index.html")


@app.get("/admin")
def admin():
    return render_template("admin.html")


@app.get("/admin.html")
def admin_html_redirect():
    return redirect("/admin")


@app.get("/style.css")
def stylesheet():
    return send_from_directory(BASE_DIR, "style.css")


@app.get("/script.js")
def dashboard_script():
    return send_from_directory(BASE_DIR, "script.js")


@app.get("/admin.js")
def admin_script():
    return send_from_directory(BASE_DIR, "admin.js")


@app.get("/images/<path:filename>")
def image(filename):
    return send_from_directory(BASE_DIR / "images", filename)


if __name__ == "__main__":
    app.run(debug=True)