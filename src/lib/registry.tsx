import { useState } from "react";
import type { ReactNode } from "react";

import {
  Alert,
  Accordion,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Breadcrumbs,
  Card,
  CardDescription,
  CardTitle,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  Input,
  Modal,
  Pagination,
  Progress,
  useAnimatedProgress,
  RadioGroup,
  Rating,
  Select,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Tabs,
  Textarea,
  ToastProvider,
  Tooltip,
  useToast,
} from "../components/ui";

import ButtonSource from "../components/ui/Button.tsx?raw";
import BadgeSource from "../components/ui/Badge.tsx?raw";
import CardSource from "../components/ui/Card.tsx?raw";
import InputSource from "../components/ui/Input.tsx?raw";
import SwitchSource from "../components/ui/Switch.tsx?raw";
import CheckboxSource from "../components/ui/Checkbox.tsx?raw";
import RadioGroupSource from "../components/ui/RadioGroup.tsx?raw";
import SelectSource from "../components/ui/Select.tsx?raw";
import SliderSource from "../components/ui/Slider.tsx?raw";
import ModalSource from "../components/ui/Modal.tsx?raw";
import DropdownSource from "../components/ui/Dropdown.tsx?raw";
import TabsSource from "../components/ui/Tabs.tsx?raw";
import TooltipSource from "../components/ui/Tooltip.tsx?raw";
import AccordionSource from "../components/ui/Accordion.tsx?raw";
import AvatarSource from "../components/ui/Avatar.tsx?raw";
import ProgressSource from "../components/ui/Progress.tsx?raw";
import SpinnerSource from "../components/ui/Spinner.tsx?raw";
import ToastSource from "../components/ui/Toast.tsx?raw";
import AlertSource from "../components/ui/Alert.tsx?raw";
import SkeletonSource from "../components/ui/Skeleton.tsx?raw";
import RatingSource from "../components/ui/Rating.tsx?raw";
import BreadcrumbsSource from "../components/ui/Breadcrumbs.tsx?raw";
import PaginationSource from "../components/ui/Pagination.tsx?raw";

export type Category = "Botones" | "Formularios" | "Superposición" | "Navegación" | "Feedback" | "Display";

export interface RegistryEntry {
  id: string;
  name: string;
  category: Category;
  description: string;
  code: string;
  demo: ReactNode;
}

const row: React.CSSProperties = { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" };
const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" };

function ToastDemo() {
  return (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  );
}

function ToastButtons() {
  const { toast } = useToast();
  return (
    <div style={row}>
      <Button size="sm" variant="secondary" onClick={() => toast("Cambios guardados", "success")}>
        Success
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast("Algo salió mal", "error")}>
        Error
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast("Nueva versión disponible", "info")}>
        Info
      </Button>
    </div>
  );
}

function ProgressDemo() {
  const value = useAnimatedProgress(72);
  return <Progress value={value} label="Carga" />;
}

export const registry: RegistryEntry[] = [
  {
    id: "button",
    name: "Button",
    category: "Botones",
    description: "Píldora con 4 variantes, 3 tamaños y efecto shine al hover.",
    code: ButtonSource,
    demo: (
      <div style={col}>
        <div style={row}>
          <Button shine>Comenzar</Button>
          <Button variant="secondary">Secundario</Button>
          <Button variant="ghost">Fantasma</Button>
          <Button variant="danger">Eliminar</Button>
        </div>
        <div style={row}>
          <Button size="sm" variant="secondary">Small</Button>
          <Button size="lg" shine>Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    ),
  },
  {
    id: "badge",
    name: "Badge",
    category: "Display",
    description: "Etiquetas compactas con tonos semánticos y modo punto.",
    code: BadgeSource,
    demo: (
      <div style={row}>
        <Badge>Neutral</Badge>
        <Badge tone="accent">Nuevo</Badge>
        <Badge tone="success" dot>Activo</Badge>
        <Badge tone="warning" dot>Pendiente</Badge>
        <Badge tone="danger">Urgente</Badge>
      </div>
    ),
  },
  {
    id: "card",
    name: "Card",
    category: "Display",
    description: "Tarjeta con halo luminoso, elevación al hover y bordes suaves.",
    code: CardSource,
    demo: (
      <Card hover glow style={{ width: 300 }}>
        <CardTitle>Proyecto Aurora</CardTitle>
        <CardDescription>
          Diseño sistemático con tokens compartidos y microinteracciones fluidas en toda la interfaz.
        </CardDescription>
      </Card>
    ),
  },
  {
    id: "input",
    name: "Input",
    category: "Formularios",
    description: "Campo con etiqueta, estado de foco con halo y validación de error.",
    code: InputSource,
    demo: (
      <div style={{ ...col, width: 300 }}>
        <Input label="Email" placeholder="hola@lumina.dev" />
        <Input label="Usuario" placeholder="nombre" error="Este campo es obligatorio" />
      </div>
    ),
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Formularios",
    description: "Área de texto multilínea con los mismos estados de foco.",
    code: InputSource,
    demo: <Textarea label="Mensaje" placeholder="Escribe algo increíble…" style={{ width: 300 }} />,
  },
  {
    id: "switch",
    name: "Switch",
    category: "Formularios",
    description: "Interruptor animado con rebote tipo resorte.",
    code: SwitchSource,
    demo: <SwitchDemo />,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Formularios",
    description: "Casilla con check animado y fondo degradado.",
    code: CheckboxSource,
    demo: <CheckboxDemo />,
  },
  {
    id: "radio",
    name: "RadioGroup",
    category: "Formularios",
    description: "Grupo de opciones excluyentes con indicador elástico.",
    code: RadioGroupSource,
    demo: <RadioDemo />,
  },
  {
    id: "select",
    name: "Select",
    category: "Formularios",
    description: "Selector personalizado con menú animado y cierre por clic externo.",
    code: SelectSource,
    demo: <SelectDemo />,
  },
  {
    id: "slider",
    name: "Slider",
    category: "Formularios",
    description: "Control deslizante con pointer events y soporte de teclado.",
    code: SliderSource,
    demo: <SliderDemo />,
  },
  {
    id: "modal",
    name: "Modal",
    category: "Superposición",
    description: "Diálogo con blur de fondo, cierre por Escape y portal al body.",
    code: ModalSource,
    demo: <ModalDemo />,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    category: "Superposición",
    description: "Menú contextual con separadores y acciones de peligro.",
    code: DropdownSource,
    demo: (
      <Dropdown
        trigger={
          <Button variant="secondary" size="sm">
            Opciones ▾
          </Button>
        }
      >
        <DropdownItem>Duplicar</DropdownItem>
        <DropdownItem>Compartir</DropdownItem>
        <DropdownSeparator />
        <DropdownItem danger>Eliminar</DropdownItem>
      </Dropdown>
    ),
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Navegación",
    description: "Navegación por pestañas dentro de una píldora contenedora.",
    code: TabsSource,
    demo: <TabsDemo />,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Superposición",
    description: "Burbuja informativa con escala elástica al aparecer.",
    code: TooltipSource,
    demo: (
      <Tooltip label="Aparece con estilo ✨">
        <Button variant="secondary" size="sm">Pásame el ratón</Button>
      </Tooltip>
    ),
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "Navegación",
    description: "Acordeón con animación de altura fluida vía grid-rows.",
    code: AccordionSource,
    demo: (
      <Accordion
        defaultOpen={0}
        items={[
          { title: "¿Qué es Lumina UI?", content: "Una librería de componentes React con estética premium y cero dependencias externas." },
          { title: "¿Es accesible?", content: "Todos los componentes exponen roles y atributos ARIA, y respetan prefers-reduced-motion." },
          { title: "¿Cómo la instalo?", content: "Copia el código de cualquier componente desde esta misma galería y pégalo en tu proyecto." },
        ]}
      />
    ),
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Display",
    description: "Avatares con iniciales generadas, degradados y estado online.",
    code: AvatarSource,
    demo: (
      <div style={col}>
        <AvatarGroup>
          <Avatar name="Ana Ruiz" status="online" />
          <Avatar name="Leo Kim" />
          <Avatar name="Sofía Mar" status="offline" />
          <Avatar name="Dan Ortiz" />
        </AvatarGroup>
        <div style={row}>
          <Avatar name="Mini Uno" size="sm" />
          <Avatar name="Mediano Dos" />
          <Avatar name="Grande Tres" size="lg" />
        </div>
      </div>
    ),
  },
  {
    id: "progress",
    name: "Progress",
    category: "Feedback",
    description: "Barra de progreso con animación easing cubica al montarse.",
    code: ProgressSource,
    demo: <ProgressDemo />,
  },
  {
    id: "spinner",
    name: "Spinner",
    category: "Feedback",
    description: "Indicador de carga rotatorio con dos tamaños.",
    code: SpinnerSource,
    demo: (
      <div style={row}>
        <Spinner label="Cargando…" />
        <Spinner size="lg" />
      </div>
    ),
  },
  {
    id: "toast",
    name: "Toast",
    category: "Feedback",
    description: "Sistema de notificaciones con contexto, auto-dismiss y salida animada.",
    code: ToastSource,
    demo: <ToastDemo />,
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    description: "Avisos semánticos con iconos SVG y tonos de color.",
    code: AlertSource,
    demo: (
      <div style={col}>
        <Alert tone="success" title="Desplegado">Tu sitio está en línea.</Alert>
        <Alert tone="warning" title="Cuota al 90%">Considera mejorar tu plan.</Alert>
      </div>
    ),
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    description: "Placeholders con brillo de carga para estados de espera.",
    code: SkeletonSource,
    demo: (
      <div style={{ display: "flex", gap: 14, alignItems: "center", width: 300 }}>
        <Skeleton width={44} circle />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <Skeleton height={12} width="70%" />
          <Skeleton height={12} width="45%" />
        </div>
      </div>
    ),
  },
  {
    id: "rating",
    name: "Rating",
    category: "Formularios",
    description: "Valoración por estrellas con estado hover y selección.",
    code: RatingSource,
    demo: <RatingDemo />,
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    category: "Navegación",
    description: "Migas de pan con jerarquía y página actual resaltada.",
    code: BreadcrumbsSource,
    demo: (
      <Breadcrumbs
        items={["Inicio", "Componentes", "Navegación", "Breadcrumbs"]}
        onNavigate={(i) => console.log("nav", i)}
      />
    ),
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "Navegación",
    description: "Paginación en píldoras con elipsis inteligentes.",
    code: PaginationSource,
    demo: <PaginationDemo />,
  },
];

function SwitchDemo() {
  const [on, setOn] = useState(true);
  return (
    <div style={row}>
      <Switch checked={on} onChange={setOn} aria-label="interruptor" />
      <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>
        {on ? "Activado" : "Desactivado"}
      </span>
    </div>
  );
}

function CheckboxDemo() {
  const [checks, setChecks] = useState({ a: true, b: false, c: false });
  return (
    <div style={col}>
      <Checkbox checked={checks.a} onChange={(v) => setChecks({ ...checks, a: v })} label="Diseño" />
      <Checkbox checked={checks.b} onChange={(v) => setChecks({ ...checks, b: v })} label="Accesibilidad" />
      <Checkbox checked={checks.c} onChange={(v) => setChecks({ ...checks, c: v })} label="Rendimiento" />
    </div>
  );
}

function RadioDemo() {
  const [value, setValue] = useState("oscuro");
  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      options={[
        { value: "oscuro", label: "Oscuro" },
        { value: "claro", label: "Claro" },
        { value: "auto", label: "Sistema" },
      ]}
    />
  );
}

function SelectDemo() {
  const [value, setValue] = useState("");
  return <Select value={value} onChange={setValue} options={["Diseño", "Frontend", "Backend", "DevOps"]} />;
}

function SliderDemo() {
  const [value, setValue] = useState(42);
  return <Slider value={value} onChange={setValue} label="Opacidad" />;
}

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmar publicación"
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button size="sm" onClick={() => setOpen(false)}>Publicar</Button>
          </>
        }
      >
        Tu componente se publicará en la galería pública y será visible para toda la comunidad.
      </Modal>
    </>
  );
}

function TabsDemo() {
  const [tab, setTab] = useState("Diseño");
  return (
    <div style={col} key={tab}>
      <Tabs tabs={["Diseño", "Código", "Docs"]} active={tab} onChange={setTab} />
      <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>
        Pestaña activa: <strong style={{ color: "var(--text-1)" }}>{tab}</strong>
      </span>
    </div>
  );
}

function RatingDemo() {
  const [stars, setStars] = useState(4);
  return (
    <div style={row}>
      <Rating value={stars} onChange={setStars} />
      <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>{stars} / 5</span>
    </div>
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(4);
  return <Pagination page={page} total={12} onChange={setPage} />;
}

export const categories: Category[] = [
  "Botones",
  "Formularios",
  "Superposición",
  "Navegación",
  "Feedback",
  "Display",
];
