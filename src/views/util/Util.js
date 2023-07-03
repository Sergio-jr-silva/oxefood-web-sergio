import { toast } from "react-toastify";

export const notify = (mensagem) => toast(mensagem, { position: toast.POSITION.TOP_CENTER });

export const notifyInfo = (mensagem) => toast.info(mensagem, { position: toast.POSITION.TOP_CENTER });

export const notifyWarn = (mensagem) => toast.warn(mensagem, { position: toast.POSITION.TOP_CENTER });

export const notifySuccess = (mensagem) => toast.success(mensagem, { position: toast.POSITION.TOP_CENTER });

export const notifyError = (mensagem) => toast.error(mensagem, { position: toast.POSITION.TOP_CENTER });

export const mensagemErro = "Ocorreu algum erro inesperado."
