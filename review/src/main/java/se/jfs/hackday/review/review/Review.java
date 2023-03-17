package se.jfs.hackday.review.review;

import jakarta.persistence.*;

@Entity
@Table(name="salt_articles")
public class Review {
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="article_id")
    private Long id;
    @Column(name = "bootcamp", nullable = false)
    private String bootcamp;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "content", nullable = false)
    private String content;
    @Column(name= "nickname" , nullable = false)
    private String nickname;

    public Review(Long id,String bootcamp, String title, String content, String nickname) {
        this.id= id;
        this.bootcamp = bootcamp;
        this.title = title;
        this.content = content;
        this.nickname = nickname;
    }

    public Review() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
