// pages/protected/_middleware.ts
import  { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // Aquí debes implementar tu lógica de autenticación.
  // Este es solo un ejemplo y puede que no funcione en tu caso específico.
//   const isAuthenticated = true;
//   if (!isAuthenticated) {
//     // Si el usuario no está autenticado, redirige a la página de inicio de sesión.
//     return NextResponse.redirect('/login');
//   }

  // Si el usuario está autenticado, permite que la solicitud continúe.
  return NextResponse.next();
}