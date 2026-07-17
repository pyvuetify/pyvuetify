"""
All the process that can be run using nox.

The nox run are build in isolated environment that will be stored in .nox. to force the venv update,
remove the .nox/xxx folder.
"""

import nox


@nox.session(reuse_venv=True, venv_backend="uv")
def lint(session: nox.Session):
    """Apply the pre-commits."""
    session.install("pre-commit")
    session.run("pre-commit", "run", "--all-files", *session.posargs)


@nox.session(reuse_venv=True, venv_backend="uv")
def test(session: nox.Session):
    """Run the selected tests and report coverage in html."""
    session.install("-e", ".[test]")
    test_files = session.posargs or ["tests"]
    session.run("pytest", "--cov", "--cov-report=html", *test_files)


@nox.session(reuse_venv=True, name="ci-test", venv_backend="uv")
def ci_test(session: nox.Session):
    """Run all the test and report coverage in xml."""
    session.install("-e", ".[test]")
    session.run("pytest", "--cov", "--cov-report=xml")


@nox.session(reuse_venv=True, name="dead-fixtures", venv_backend="uv")
def dead_fixtures(session: nox.Session):
    """Check for dead fixtures within the tests."""
    session.install("-e", ".[test]")
    session.run("pytest", "--dead-fixtures")


@nox.session(reuse_venv=True, venv_backend="uv")
def docs(session):
    """Build the documentation."""
    build = session.posargs.pop() if session.posargs else "html"
    session.install("--group", "docs", "-e", ".")
    dst = f"docs/_build/{build}"
    session.run("sphinx-build", "-v", "-b", build, "docs", dst)


@nox.session(reuse_venv=True, name="docs-live", venv_backend="uv")
def docs_live(session):
    """Build the documentation."""
    build = session.posargs.pop() if session.posargs else "html"
    session.install("--group", "docs", "-e", ".")
    session.install("sphinx-autobuild")
    dst = "docs/_build/html"
    ignore = "docs/autoapi/.*"
    session.run("sphinx-autobuild", "-v", "--re-ignore", ignore, "-b", build, "docs", dst)


@nox.session(reuse_venv=True, name="docs-debug", venv_backend="uv")
def docs_debug(session):
    """Build docs for specific components only (fast debug mode).

    Usage:
        nox -s docs-debug -- Alert
        nox -s docs-debug -- Alert,Btn
    """
    session.install("--group", "docs", "-e", ".")
    session.install("sphinx-autobuild")
    dst = "docs/_build/html"
    session.run("sphinx-autobuild", "-v", "-b", "html", "docs", dst)
