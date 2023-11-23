import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";


export default async function middleware(req:NextRequest) {
    
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({
    res,
    req
  })

  await supabase.auth.getSession()

  return res
  
}