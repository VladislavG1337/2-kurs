package lesson3b.catch_the_drop;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;

public class GameWindow extends JFrame{

    private static GameWindow game_window;
    private static long last_frame_time;
    private static Image prekol;
    private static Image game_over;
    private static Image drop;
    private static float drop_left = 400;
    private static float drop_top = 400;
    private static float drop_v = 300;
    private static int score; //1.подсчет очков

    public static void main(String[] args) throws IOException {
        prekol = ImageIO.read(GameWindow.class.getResourceAsStream("prekol.jpg"));
        game_over = ImageIO.read(GameWindow.class.getResourceAsStream("game_over.png"));
        drop = ImageIO.read(GameWindow.class.getResourceAsStream("drop.png"));
        game_window = new GameWindow();
        game_window.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        game_window.setLocation(200, 0);
        game_window.setSize(1440, 1080);
        game_window.setResizable(false);
        last_frame_time = System.nanoTime();
        GameField game_field = new GameField();
        game_field.addMouseListener(new MouseAdapter() {
            @Override
            public void mousePressed(MouseEvent e) { //3.подключение метода работы с мышкой
                int x = e.getX(); //4.координаты для мышки
                int y = e.getY();//4.координаты для мышки
                float drop_right = drop_left + drop.getWidth(null); //5. размер капли слева
                float drop_bottom = drop_top + drop.getHeight(null);//5. размер капли снизу
                boolean is_drop = x >= drop_left && x <= drop_right && y >= drop_top && y <= drop_bottom;
                //6. попадание нажатие клавиши в каплю
                if(is_drop) {
                    int range = 10;
                    int number = (int) (Math.random() * range);
                    if (number<5) {
                        drop_top = 400; //7. место появления капли
                        drop_left = 400;//7. место появления капли
                        drop_v = drop_v + 20;//8. ускорение капли
                        score++; //9. подсчет очков и их вывод (следующая строка)
                        game_window.setTitle("Сколько слез проронил Никита, пока изучал Java?   - " + score);}
                    else {
                        drop_top = 400;//7. место появления капли
                        drop_left = 650;//7. место появления капли
                        drop_v = drop_v + 20;//8. ускорение капли
                        score++;//9. подсчет очков и их вывод (следующая строка)
                        game_window.setTitle("Сколько слез проронил Никита, пока изучал Java?   - " + score);}
                }
            }
        });
        game_window.add(game_field);
        game_window.setVisible(true);
    }

    private static void onRepaint(Graphics g){
        long current_time = System.nanoTime();
        float delta_time = (current_time - last_frame_time) * 0.000000001f;
        last_frame_time = current_time;

        drop_top = drop_top + drop_v * delta_time;
        g.drawImage(prekol, 0, 0, null);
        g.drawImage(drop, (int) drop_left, (int) drop_top, null);
        if (drop_top > game_window.getHeight()) g.drawImage(game_over, 500, 400, null);
        //2.если капля ушла за размер окна, вывод гейм овер в координате
    }

    private static class GameField extends JPanel{

        @Override
        protected void paintComponent(Graphics g){
            super.paintComponent(g);
            onRepaint(g);
            repaint();
        }
    }
}