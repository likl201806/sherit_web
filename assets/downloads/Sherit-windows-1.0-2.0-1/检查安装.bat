@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ===== Sherit ???? =====
echo ????: %CD%
echo.

call :check "Sherit.exe"
call :check "flutter_windows.dll"
call :check "data\icudtl.dat"
if exist "%SystemRoot%\System32\vcruntime140_1.dll" (echo [OK] VC++???) else (echo [??] VC++??? - ?????????.bat?)
call :check "data\app.so"
call :check "data\flutter_assets\AssetManifest.bin"

echo.
echo ??????:
dir /b
echo.
echo data ??:
dir /b data
echo.
pause
exit /b 0

:check
if exist "%~1" (echo [OK] %~1) else (echo [??] %~1)
exit /b 0
