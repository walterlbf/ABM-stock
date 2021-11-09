import React, { useState } from "react";

function FormCadastro(props) {
  const produtoInicial = {
    id: null,
    quantity: 0,
    product: "",
    price: 0,
  };

  const [produtoState, setProdutoState] = useState(produtoInicial);

  const handleInputChange = (event) => {
    setProdutoState({
      ...produtoState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (produtoState.quantity || produtoState.product || produtoState.price) {
      props.addProduto(produtoState);
      setProdutoState(produtoInicial);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <h1> ABM STOCK </h1>
      <br />
      <label>Quantity:</label>
      <br />
      <input name="quantity" type="text" onChange={handleInputChange} />
      <br />
      <label>Product Name:</label>
      <br />
      <input name="product" type="text" onChange={handleInputChange} />
      <br />
      <label>Price:</label>
      <br />
      <input name="price" type="text" onChange={handleInputChange} />
      <br />
      <input type="submit" value="Add Produto" />
    </form>
  );
}

// function InformationTable(props) {
//   const [] = useState()

//   const deletarProduto = (index) => {
//     console.log(props.produtos[index]);
//     props.produtos.splice(index, 1);
//     console.log(props.produtos);
//   };

//   const display =
//     props.produtos.length > 0 ? (
//       props.produtos.map((produto, index) => (
//         <tr key={index}>
//           <td>{produto.id}</td>
//           <td>{produto.quantity}</td>
//           <td>{produto.product}</td>
//           <td>{produto.price}</td>
//           <td>Select</td>
//           <td onClick={() => deletarProduto(index)}>Delete</td>

//         </tr>
//       ))
//     ) : (
//       <tr>
//         <td colSpan={4}>&nbsp;</td>
//       </tr>
//     );

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>_id</th>
//           <th>Quantity</th>
//           <th>Product Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{display}</tbody>
//     </table>
//   );
// }

function App(props) {
  const produtoArray = [];

  const [produtos, setProdutos] = useState(produtoArray);



  const addProduto = (produto) => {
    produto.id = produtos.length + 1;
    setProdutos([...produtos, produto]);
  };

  const deletarProduto = (index) => {
    const produtosCopy = Array.from(produtos);
    produtosCopy.splice(index, 1);
    setProdutos(produtosCopy);
  };

  const display =
    produtos.length > 0 ? (
      produtos.map((produto, index) => (
        <tr key={index}>
          <td>{produto.id}</td>
          <td>{produto.quantity}</td>
          <td>{produto.product}</td>
          <td>{produto.price}</td>
          <td className="button">Select</td>
          <td className="button" onClick={() => deletarProduto(index)}>Delete</td>

        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={4}>&nbsp;</td>
      </tr>
    );


  return (
    <section>
      <FormCadastro addProduto={addProduto} />
      {/* <InformationTable produtos={produtos} setProdutoState={setProdutos} /> */}
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>
    </section>
  );
}

export default App;
