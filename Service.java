import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Service extends Thread {
  String line;
  Process process;

  @Override
  public void run() {
    try {
      ProcessBuilder processBuilder = new ProcessBuilder("node", "server");
      process = processBuilder.start();
      BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
      while ((line = bufferedReader.readLine()) != null) {
        System.out.println(line);
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public static void main(String[] args) {
    try {
      Service service = new Service();
      service.start();
      service.join();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

