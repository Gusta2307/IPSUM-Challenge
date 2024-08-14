import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css';


function Welcome() {
    return (
        <div className="card">
        <div className="">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Bienvenido a IPSUM Challenge</h1>
                <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8">
                    ¡Prepárate para descubrir un mundo lleno de retos y diversión! Únete a nuestra comunidad y accede a desafíos exclusivos diseñados para poner a prueba tu ingenio y creatividad. Regístrate o inicia sesión ahora para comenzar tu aventura.
                </p>
            </div>
            <div className="flex justify-center gap-4">
                <button className="btn btn-black" >
                    <Link className="link-white" to="/login">Login</Link>
                </button>
                <button className="btn">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </div>
        </div>
        </div>
    );
}

export default Welcome;