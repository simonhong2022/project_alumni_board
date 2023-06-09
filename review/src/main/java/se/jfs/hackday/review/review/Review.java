package se.jfs.hackday.review.review;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="salt_articles")
public class Review {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(
            name = "system-uuid", strategy = "uuid"
    )
    @Column(name="article_id")
    private String id;
    @Column(name = "bootcamp", nullable = false)
    private String bootcamp;
    @Column(name = "titles", nullable = false)
    private String titles;
    @Column(name = "content", nullable = false)
    private String content;
    @Column(name= "nickname" , nullable = false)
    private String nickname;

    public Review(String id,String bootcamp, String titles, String content, String nickname) {
        this.id= id;
        this.bootcamp = bootcamp;
        this.titles = titles;
        this.content = content;
        this.nickname = nickname;
    }

    public Review() {

    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return titles;
    }

    public void setTitle(String titles) {
        this.titles = titles;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getBootcamp() {
        return bootcamp;
    }

    public void setBootcamp(String bootcamp) {
        this.bootcamp = bootcamp;
    }
}
