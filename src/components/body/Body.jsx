import React from 'react'

import './Body.css'

export default function Body() {
    return (
        <div>
            <p>
                Esta página foi construída para testar conhecimentos com React, utilizando components e estilização e também para apresentar meu blog.
            </p>
            <p>
                Meu blog tem como finalidade apresentar projetos e explicar passo a
                <br /> passo a construção de aplicações em linguagens voltadas para a WEB.
            </p>
            <p>
                <a href="https://devinsano.blogspot.com/" target="blank">Acesse meu blog clicando aqui!</a>
            </p>
            <p>
                Acesse também o perfil no Instagram.
            </p>
            <p className="Instagram">
                <a href="https://www.instagram.com/dev_insano/?hl=pt-br" target="blank">Perfil do Instagram</a>
            </p>

            <hr />
        </div>
    )
}