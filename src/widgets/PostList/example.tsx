import { ModalComponent } from "../../shared/ui/CCModal";


export function Example() {
  return (
    <ModalComponent post = {{
      id:1,
      title: "txt",
      body: 'txtxtxt'
    }}>
      <ModalComponent.Body>
      </ModalComponent.Body>
      <ModalComponent.Footer>
        Кнопки
      </ModalComponent.Footer>
    </ModalComponent>
  );
}