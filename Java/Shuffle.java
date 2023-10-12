import java.util.Arrays;
import java.util.Random;

public class Shuffle {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};

        int[] shuffledArray = Arrays.copyOf(originalArray, originalArray.length);

        Random random = new Random();
        for (int i = shuffledArray.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }

        System.out.println("Original Array: " + Arrays.toString(originalArray));
        System.out.println("Shuffled Array: " + Arrays.toString(shuffledArray));
    }
}
