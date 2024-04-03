import { Component, JSX, Show, createSignal } from "solid-js";
import { VsClose } from "solid-icons/vs";
export const Modal = (props: {
    title?: string;
    visable: boolean;
    children: JSX.Element;
    onClose: () => any;
}) => {
    return (
        <Show when={props.visable}>
            <div class="bg-black/50 w-screen h-screen fixed items-center justify-center flex">
                <div class="bg-main min-h-1/2 w-1/2 rounded-xl overflow-auto max-h-screen flex flex-col">
                    <div class="w-full p-5 relative flex items-center justify-center">
                        <button
                            onClick={props.onClose}
                            class="text-icon-title text-xl absolute right-5"
                        >
                            <VsClose />
                        </button>
                        <Show when={props.title}>
                            <h1 class="text-text-title">{props.title}</h1>
                        </Show>
                    </div>
                    {props.children}
                </div>
            </div>
        </Show>
    );
};
