import Acordion from "../../components/accordion/Index";
import { Formulario } from "../../components/formulario/Index";

import dalmata from '../../assets/dalmata.webp'
import gondola from '../../assets/gondola.webp'
import Botao from "../../components/button/Index";


export default function Section2() {

    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen bg-[#04083a] flex flex-col  items-center max-w-screen text-white">
            <div className="mb-20 px-5 w-full lg:min-h-[450px] flex justify-center items-center video ">
                <iframe className="w-full lg:w-[80%] h-[200px] md:h-[350px] lg:h-[450px] " src="https://www.youtube.com/embed/ukoS9tu_MRA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="mb-10 px-5 w-full md:w-[50%] flex flex-col items-center ">
                <h2 className="text-5xl font-bold">Seja um revendedor!!</h2>
                <p className=" md:text-center mt-10 text-xl ">
                Quer obter mais informações e entrar para o mundo Zoomies? Preencha o formulário abaixo e envie uma mensagem para nós!
                </p>
            </div>

            {/* FORM */}
            <div className="mb-20 px-5 flex gap-28">
                <Formulario />
                <img src={dalmata} alt="ilustração de um dalmata" className="max-w-md hidden xl:block"/>
            </div>

            {/* GONDOLA */}
            <div className='flex flex-col lg:flex-row justify-center items-center mb-10 xl:gap-24'>
                <img src={gondola} alt="" className='max-w-[300px]  md:max-w-lg lg:max-w-[32rem] '/>
                <div className='w-full px-5 md:px-0 flex flex-col items-center md:w-[90%] max-w-[600px] md:justify-center'>
                    <div className='w-full flex flex-col lg:p-5 xl:p-0'>
                        <h2 className='mb-5 text-[40px] leading-[50px] md:text-[80px] md:leading-[100px] font-bold text-white text-center '>
                            Materiais de Marketing Exclusivos
                        </h2>
                        <span className='w-full text-[20px] font-normal text-center  text-white border-[2px] rounded-xl'>Seja um parceiro Zoomies!</span>
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[30px]'>Receba material de marketing gratuito para te ajudar a vender. Estão inclusos banners, cartazes, folders, gôndola e muito mais.</h2>
                    <Botao>
                        Chamar no WhatsApp
                    </Botao>
                </div>
            </div>

            {/* ACCORDION */}
            <div className="w-full px-7 flex flex-col lg:flex-col items-center  justify-center gap-2 lg:gap-5 mb-20 ">
                <h2 className='mb-5 text-[40px] leading-[50px] md:text-[60px] md:leading-[100px] font-bold text-white text-center '>
                    Conheça os benefícios de revender Zoomies
                </h2>
                
                <div className="w-full flex flex-col gap-3 lg:flex-row justify-center items-center">
                <div className="flex flex-col gap-2 lg:gap-3">
                    <Acordion 
                        id="accordion1" 
                        title="Potencial de lucro" 
                        text="Como revendedor de um produto, você tem a oportunidade de ganhar dinheiro através da venda desses itens. A depender do produto e da demanda, você pode obter uma margem acima de 70%."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion2" 
                        title="Flexibilidade " 
                        text="Ser um revendedor permite que você tenha um horário flexível. Você pode organizar o seu tempo de acordo com suas necessidades e preferências, o que é especialmente benéfico para quem procura conciliar trabalho e vida pessoal."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion3" 
                        title="Baixo investimento inicial" 
                        text="Em comparação a abrir uma loja física ou iniciar um negócio do zero, ser um revendedor muitas vezes requer um investimento inicial relativamente baixo. Isso reduz o risco financeiro envolvido e oferece uma oportunidade acessível de começar já trabalhando com uma das marcas mais premium de bifinho do mercado."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion4" 
                        title="Treinamento e suporte" 
                        text="A Zoomies oferece treinamento e suporte aos revendedores para ajudá-los a ter sucesso. Isso pode incluir materiais de marketing, orientações de vendas, treinamento de produtos e assistência contínua para ajudá-lo a se destacar no mercado."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion5" 
                        title="Estabelecer seu próprio ritmo" 
                        text="Como revendedor, você é seu próprio chefe e pode estabelecer seu próprio ritmo de trabalho. Você pode definir metas e trabalhar de acordo com elas, adaptando-se às suas necessidades e aspirações."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />
                </div>

                <div className="flex flex-col gap-2 lg:gap-3">
                    <Acordion 
                        id="accordion6" 
                        title="Oportunidade de construir relacionamentos" 
                        text="Ser um revendedor oferece a oportunidade de construir relacionamentos com clientes, fornecedores e outros revendedores. Essas conexões podem ser valiosas para expandir seus negócios, obter insights do mercado e até mesmo formar parcerias futuras."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion7" 
                        title="Variedade de produtos" 
                        text="Com a Zoomies, você pode ter acesso a uma variedade de produtos diferentes para oferecer aos seus clientes. Isso permite que você diversifique seu portfólio e atenda às diferentes necessidades e preferências do mercado."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion8" 
                        title="Aproveitar a reputação da marca" 
                        text="Ao se tornar um revendedor da Zoomies, você pode aproveitar a reputação positiva e o reconhecimento da marca. Isso pode facilitar a venda dos produtos, pois os consumidores já estão familiarizados e confiam na marca."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion9" 
                        title="Oportunidades de crescimento" 
                        text="Se você está procurando uma oportunidade de crescimento profissional, ser um revendedor pode ser um bom caminho. À medida que você constrói sua base de clientes e ganha experiência, você tem a chance de expandir seu negócio e se tornar um distribuidor ou até mesmo um parceiro oficial da empresa."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />

                    <Acordion 
                        id="accordion10" 
                        title="Satisfação pessoal" 
                        text="Ser um revendedor Zoomies oferece a oportunidade de se tornar um empreendedor e colher os frutos de seu trabalho. Além disso, a emoção de fechar uma venda bem-sucedida e ajudar os clientes a encontrar o produto certo pode ser gratificante."
                        style="w-[100%] md:w-[450px] rounded" //syles gerais
                    />
                </div>
                </div>
            </div>
            
        </section>
    )
}