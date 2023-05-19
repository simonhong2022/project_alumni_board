import 'semantic-ui-css/semantic.min.css'
import { List, Button, Icon } from 'semantic-ui-react'


export default function Footer() {
    return (
        <footer className="home-footer">
            <List horizontal relaxed='very' inverted>
                <List.Item>
                    <List.Content>
                        <List.Header>Simon.H</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </footer>
    )
}
