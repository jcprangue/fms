import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
    faTachometerAlt,
    faFile,
    faPrint,
    faUsers,
    faListAlt,
    faCogs
} from "@fortawesome/free-solid-svg-icons";

library.add(faTachometerAlt, faFile, faPrint, faUsers, faListAlt, faCogs);

dom.watch();
