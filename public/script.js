// Pegando e formatando data do cadastro
const dataAtual = new Date();
const opcoesFormatacao = { day: 'numeric', month: '2-digit', year: '2-digit' };
const dataCadastro = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);

// ?utm_content=content&utm_medium=medium&utm_source=source&utm_campign=campaign&utm_term=term&criativos=criativos&origem=origem&temp=temperatura&publico=publico&launch=launch

// Variaveis para puxar parametros de url
const urlParams = new URLSearchParams(window.location.search);
const utmContent = urlParams.get("utm_content")
const utmMedium = urlParams.get("utm_medium")


const inputData = document.getElementById("HORA"); //Esta horas mas é a data dd/mm/yyyy
const inputMedium = document.getElementById("UTM_MEDIUM");
const inputContent = document.getElementById("UTM_CONTENT");
const inputSource = document.getElementById("UTM_SOURCE");
const inputCampaign = document.getElementById("UTM_CAMPAIGN");
const inputTerm = document.getElementById("UTM_TERM");
const inputCriativos = document.getElementById("CRIATIVOS");
const inputOrigem = document.getElementById("ORIGEM");
const inputTemp = document.getElementById("TEMP");
const inputPublico = document.getElementById("PUBLICO");
const inputLaunch = document.getElementById("LAUNCH");


// Popular input utm
HORA.value = dataCadastro;
UTM_MEDIUM.value = utmMedium;
UTM_CONTENT.value = utmContent;
UTM_SOURCE.value = inputSource;
UTM_CAMPAIGN.value = inputCampaign;
UTM_TERM.value = inputTerm;
CRIATIVOS.value = inputCriativos;
ORIGEM.value = inputOrigem;
TEMP.value = inputTemp;
PUBLICO.value = inputPublico;
LAUNCH.value = inputLaunch;



// Redirecionar após cadastro
function redirect(){
    setTimeout(function() {
    window.location.href = "https://ingleselisato.com.br/ies-parabens-org/";
}, 1000);
}