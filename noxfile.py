"""
All the process that can be run using nox.

The nox run are build in isolated environment that will be stored in .nox. to force the venv update,
remove the .nox/xxx folder.
"""

import nox


@nox.session(reuse_venv=True)
def lint(session):
    """Apply the pre-commits."""
    session.install("pre-commit")
    session.run("pre-commit", "run", "-a", *session.posargs)


@nox.session(reuse_venv=True)
def docs(session):
    """Build the documentation."""
    build = session.posargs.pop() if session.posargs else "html"
    session.install(".[doc]")
    dst = f"docs/_build/{build}"
    session.run(
        "sphinx-build",
        "-v",
        "-b",
        build,
        "docs",
        dst,
        env={"IPYKERNEL_TRANSPORT": "ipc"},
    )


@nox.session(reuse_venv=True, name="docs-live")
def docs_live(session):
    """Build the documentation."""
    build = session.posargs.pop() if session.posargs else "html"
    session.install(".[doc]")
    session.install("sphinx-autobuild")
    dst = "docs/_build/html"
    ignore = "docs/autoapi/.*"
    session.run(
        "sphinx-autobuild",
        "-v",
        "--re-ignore",
        ignore,
        "-b",
        build,
        "docs",
        dst,
        env={"IPYKERNEL_TRANSPORT": "ipc"},
    )


@nox.session(reuse_venv=True, name="docs-debug")
def docs_debug(session):
    """Build docs for specific components only (fast debug mode).

    Usage:
        nox -s docs-debug -- Alert
        nox -s docs-debug -- Alert,Btn
    """
    components = session.posargs.pop() if session.posargs else "Alert"
    session.install(".[doc]")
    session.install("sphinx-autobuild")
    dst = "docs/_build/html"
    session.run(
        "sphinx-autobuild",
        "-v",
        "-b",
        "html",
        "docs",
        dst,
        env={"IPYKERNEL_TRANSPORT": "ipc", "DOCS_ONLY": components},
    )
