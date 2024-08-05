import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps{
    closeCreateActivityModal: () => void
}

export function CreateActivityModal(props: CreateActivityModalProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                <button type="button" onClick={props.closeCreateActivityModal}>
                  <X className="size-5 text-zinc-400"/>
                </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Todos convidados podem visualizar as atividades.
                </p>
            </div>
            <form className="space-y-3" >
              <div className="h-14 px-4 py-8 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                      <Tag className="size-5 text-zinc-400"/>
                      <input 
                        name="title"
                        placeholder="Qual a atividade?"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                      />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-14 px-4 py-8 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 w-full">
                            <Calendar className="size-5 text-zinc-400"/>
                            <input 
                            type="datetime-local"
                            name="occours_at"
                            placeholder="Data e horário da atividade"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            />
                </div>
              </div>
              <Button variant="greenButton" size="full">
                Salvar atividade
              </Button>
            </form>
          </div>
        </div>
    )
}