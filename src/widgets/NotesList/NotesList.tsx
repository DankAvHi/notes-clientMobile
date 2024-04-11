import { NotesListStyles as styles } from "./NotesList.styles";
import { List } from "./List";
import { useNotesContext } from "../../app/providers";
import { View } from "react-native";

export const NotesList = () => {
    const { getNotes } = useNotesContext();
    const notes = getNotes();
    return (
        <View style={styles.NotesList}>
            <List notes={notes || []} />
        </View>
    );
};
