import { Component, Match, Show, Switch, createSignal } from "solid-js";
import { VsAdd, VsGroupByRefType } from "solid-icons/vs";
import { Modal } from "../UI";

enum ModalEnum {
    CLOSE = 0,
    ADD_EVENT = 1,
    ADD_GROUP = 2,
}

const Menu = (props: { modalHandler: (m: number) => any }) => {
    return (
        <div class="bg-emptyBar h-full w-80 border-r border-black flex flex-col">
            <div class="flex items-center justify-between p-5 h-12">
                <div class="flex flex-row items-center justify-center text-text-title space-x-2 rtl:space-x-reverse">
                    <button
                        onClick={() => props.modalHandler(ModalEnum.ADD_EVENT)}
                    >
                        <VsAdd />
                    </button>
                    <button
                        onClick={() => props.modalHandler(ModalEnum.ADD_GROUP)}
                    >
                        <VsGroupByRefType />
                    </button>
                </div>
                <h1 class="text-text-title font-semibold text-xl">رویداد ها</h1>
            </div>
        </div>
    );
};

const Calender = () => {
    return (
        <div class="bg-main w-full h-full">
            <div class="bg-emptyBar h-12 w-full"></div>
        </div>
    );
};

const AddEventModal = () => {
    return <div class="h-96 "></div>;
};
const AddGroupModal = () => {
    return <div class="h-96 "></div>;
};

const Main = () => {
    const [modal, modalHandler] = createSignal(ModalEnum.CLOSE);

    return (
        <>
            <Modal
                visable={modal() !== ModalEnum.CLOSE}
                onClose={() => modalHandler(ModalEnum.CLOSE)}
            >
                <Switch>
                    <Match when={modal() == ModalEnum.ADD_EVENT}>
                        <AddEventModal />
                    </Match>
                    <Match when={modal() == ModalEnum.ADD_GROUP}>
                        <AddGroupModal />
                    </Match>
                </Switch>
            </Modal>
            <div class="w-full h-full flex flex-row">
                <Calender />
                <Menu modalHandler={(m: number) => modalHandler(m)} />
            </div>
        </>
    );
};

export default Main;
