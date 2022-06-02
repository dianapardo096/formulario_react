import styled from 'styled-components';

const colores ={
    falla: "#bb2929",
    exito: "#1ed12d",
    borde: "#FFFF",
}

const Formulario = styled.form`
background-color: rgba(44, 44, 60, 0.7);
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
height: 45vh;
width: 35%;
}
`;

const H2 = styled.h2`
color:white;
}
`;

const GrupoInput=styled.div`
position: relative;
z-index: 90;
margin:0px:
}
`;

const Input=styled.input`
width: 100%;
background-color: #fff;
border-radius: 8px;
height: 2rem;
line-height: 2rem;
padding: 0px 20px 0px 10px;
transition: 0.5s ease all;
border: 3px solid transparent;

&:focus {boder: 3px solid ${colores.borde}
outline:none;
box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
}
}
`;

const LeyendaError=styled.input`

}
`;



export {Formulario,H2,GrupoInput,Input,LeyendaError}